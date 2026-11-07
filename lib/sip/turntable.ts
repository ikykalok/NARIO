import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { createCan, CAN, CanObject } from "./models";
import { CAN_POSE, STUDIO_CONFIG } from "./stills";
import { Flavour, flavours } from "@/data/sip";
import { gsap } from "@/lib/gsap";

export const OVERSCAN = 1.4;

export interface TurnCallbacks {
  onUpdateSweep?: (sweep: number) => void;
  onLift?: () => void;
  onDrop?: () => void;
  onComplete?: () => void;
}

class TurntableManager {
  private renderer: THREE.WebGLRenderer | null = null;
  private scene: THREE.Scene | null = null;
  private camera: THREE.PerspectiveCamera | null = null;
  private glintLight: THREE.DirectionalLight | null = null;
  private canCache = new Map<string, CanObject>();
  private currentCan: CanObject | null = null;
  private currentHost: HTMLElement | null = null;
  private animTimeline: gsap.core.Timeline | null = null;
  private isTurning = false;
  private rafId: number | null = null;

  init() {
    if (this.renderer || typeof window === "undefined") return;

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      preserveDrawingBuffer: false,
      powerPreference: "high-performance",
    });
    this.renderer.setSize(600 * OVERSCAN, 800 * OVERSCAN);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.NeutralToneMapping;
    this.renderer.setClearColor(0x000000, 0);

    const pmrem = new THREE.PMREMGenerator(this.renderer);
    pmrem.compileEquirectangularShader();
    const roomScene = new RoomEnvironment();
    const envTarget = pmrem.fromScene(roomScene, 0.04);

    this.scene = new THREE.Scene();
    this.scene.environment = envTarget.texture;
    this.scene.environmentIntensity = 0.9;

    const ambient = new THREE.AmbientLight(
      STUDIO_CONFIG.ambientColor,
      STUDIO_CONFIG.ambientIntensity
    );
    this.scene.add(ambient);

    const keyLight = new THREE.DirectionalLight(
      STUDIO_CONFIG.keyColor,
      STUDIO_CONFIG.keyIntensity
    );
    keyLight.position.copy(STUDIO_CONFIG.keyPos);
    this.scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(
      STUDIO_CONFIG.rimColor,
      STUDIO_CONFIG.rimIntensity
    );
    rimLight.position.copy(STUDIO_CONFIG.rimPos);
    this.scene.add(rimLight);

    this.glintLight = new THREE.DirectionalLight(0xffffff, 0);
    this.glintLight.position.set(-5, 1, 3);
    this.scene.add(this.glintLight);

    this.camera = new THREE.PerspectiveCamera(
      STUDIO_CONFIG.fov,
      STUDIO_CONFIG.aspect,
      0.1,
      50
    );
    this.camera.position.copy(STUDIO_CONFIG.canCamPos);
    this.camera.zoom = 1 / OVERSCAN;
    this.camera.updateProjectionMatrix();

    // Set styling on renderer domElement
    const el = this.renderer.domElement;
    el.style.position = "absolute";
    el.style.top = "50%";
    el.style.left = "50%";
    el.style.transform = "translate(-50%, -50%)";
    el.style.width = `${100 * OVERSCAN}%`;
    el.style.height = `${100 * OVERSCAN}%`;
    el.style.pointerEvents = "none";
  }

  warm(flavour: Flavour = flavours[0]) {
    this.init();
    if (!this.canCache.has(flavour.id)) {
      const can = createCan(flavour);
      this.canCache.set(flavour.id, can);
      if (this.renderer && this.scene && this.camera) {
        this.scene.add(can.root);
        this.renderer.render(this.scene, this.camera);
        this.scene.remove(can.root);
      }
    }
  }

  getCan(flavour: Flavour): CanObject {
    if (!this.canCache.has(flavour.id)) {
      this.canCache.set(flavour.id, createCan(flavour));
    }
    return this.canCache.get(flavour.id)!;
  }

  getIsTurning(): boolean {
    return this.isTurning;
  }

  turn(
    hostEl: HTMLElement,
    flavour: Flavour,
    toBack: boolean,
    callbacks?: TurnCallbacks
  ): boolean {
    if (this.isTurning) return false;
    this.init();

    if (!this.renderer || !this.scene || !this.camera) return false;

    this.isTurning = true;
    this.currentHost = hostEl;

    // Attach canvas to host
    const dom = this.renderer.domElement;
    if (dom.parentElement !== hostEl) {
      hostEl.appendChild(dom);
    }
    dom.style.display = "block";

    // Prepare can
    if (this.currentCan && this.currentCan.root.parent === this.scene) {
      this.scene.remove(this.currentCan.root);
    }

    const can = this.getCan(flavour);
    this.currentCan = can;
    this.scene.add(can.root);

    const startPose = toBack ? CAN_POSE.front : CAN_POSE.back;
    const targetPose = toBack ? CAN_POSE.back : CAN_POSE.front;

    // Base spin: always at least 1.5 turns forward (3*PI)
    const startRy = startPose.y;
    // Always advance forward
    const baseDelta = 3 * Math.PI;
    const targetRy = startRy + baseDelta + (targetPose.y - ((startRy + baseDelta) % (2 * Math.PI)));

    const state = {
      y: 0,
      sy: 1,
      rx: 0,
      ry: startRy,
      rz: startPose.z,
      sweep: 0,
    };

    const applyTransform = () => {
      const sy = state.sy;
      const sxz = 1 / Math.sqrt(Math.max(0.001, sy));
      can.root.scale.set(sxz, sy, sxz);

      // Anchored at base: y - (1 - sy) * CAN.H / 2
      can.root.position.set(0, state.y - (1 - sy) * (CAN.H / 2), 0);
      can.root.rotation.set(state.rx, state.ry, state.rz);

      // Glint light
      if (this.glintLight) {
        const sweep = state.sweep;
        this.glintLight.position.x = -5 + sweep * 10;
        this.glintLight.intensity = Math.sin(Math.PI * sweep) * 2.6;
      }

      if (this.renderer && this.scene && this.camera) {
        this.renderer.render(this.scene, this.camera);
      }
    };

    // Kill any existing timeline
    if (this.animTimeline) {
      this.animTimeline.kill();
    }

    const tl = gsap.timeline({
      onUpdate: applyTransform,
      onComplete: () => {
        // Double rAF to release
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            if (dom.parentElement) {
              dom.style.display = "none";
            }
            if (this.currentCan && this.scene) {
              this.scene.remove(this.currentCan.root);
            }
            this.isTurning = false;
            callbacks?.onComplete?.();
          });
        });
      },
    });

    this.animTimeline = tl;

    // 0.00 squash: sy .92, rz +.1 (.18 s power2.out)
    tl.to(
      state,
      {
        sy: 0.92,
        rz: startPose.z + 0.1,
        duration: 0.18,
        ease: "power2.out",
      },
      0.0
    );

    // 0.12 whip spin: ry -> target pose (1.15 s power3.inOut)
    tl.to(
      state,
      {
        ry: targetRy,
        duration: 1.15,
        ease: "power3.inOut",
      },
      0.12
    );

    // 0.16 lift + stretch: y .26, sy 1.05 (.45 s power2.out)
    tl.to(
      state,
      {
        y: 0.26,
        sy: 1.05,
        duration: 0.45,
        ease: "power2.out",
        onStart: () => callbacks?.onLift?.(),
      },
      0.16
    );

    // 0.20 lean: rz -.2, rx .14 (.42 s sine.inOut)
    tl.to(
      state,
      {
        rz: -0.2,
        rx: 0.14,
        duration: 0.42,
        ease: "sine.inOut",
      },
      0.2
    );

    // 0.62 lean back: rz .16, rx -.08 (.3 s sine.inOut)
    tl.to(
      state,
      {
        rz: 0.16,
        rx: -0.08,
        duration: 0.3,
        ease: "sine.inOut",
      },
      0.62
    );

    // 0.20 travelling light glint: sweep 0 -> 1 over 1 s
    tl.to(
      state,
      {
        sweep: 1,
        duration: 1.0,
        ease: "none",
        onUpdate: () => callbacks?.onUpdateSweep?.(state.sweep),
      },
      0.2
    );

    // 0.92 drop: y 0, sy .93 (.3 s power2.in)
    tl.to(
      state,
      {
        y: 0,
        sy: 0.93,
        duration: 0.3,
        ease: "power2.in",
        onStart: () => callbacks?.onDrop?.(),
      },
      0.92
    );

    // 1.22 land: sy 1 (.55 s elastic.out(1.1, .4))
    tl.to(
      state,
      {
        sy: 1.0,
        duration: 0.55,
        ease: "elastic.out(1.1, 0.4)",
      },
      1.22
    );

    // 1.12 settle rz/rx to target pose (.6 s elastic.out(1, .5))
    tl.to(
      state,
      {
        rz: targetPose.z,
        rx: 0,
        duration: 0.6,
        ease: "elastic.out(1.0, 0.5)",
      },
      1.12
    );

    return true;
  }
}

export const turntableManager = new TurntableManager();
