import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { createCoconut, createCan } from "./models";
import { labelFontsReady } from "./textures";
import { flavours, Flavour } from "@/data/sip";

export const CAN_POSE = {
  front: { y: 0.18, z: -0.1 },
  back: { y: Math.PI + 0.12, z: 0.06 },
};

export const STUDIO_CONFIG = {
  fov: 24,
  aspect: 600 / 800,
  canCamPos: new THREE.Vector3(0, 0.2, 5.2),
  ambientColor: "#fff7ea",
  ambientIntensity: 0.5,
  keyPos: new THREE.Vector3(-3.5, 5, 4.5),
  keyColor: "#fff2df",
  keyIntensity: 2.2,
  rimPos: new THREE.Vector3(4.5, 2.2, -3.5),
  rimColor: "#e3ebf2",
  rimIntensity: 1.5,
};

// Cache for generated stills: key -> object URL
const stillCache = new Map<string, string>();
const pendingPromises = new Map<string, Promise<string>>();

interface RenderTask {
  key: string;
  resolve: (url: string) => void;
  reject: (err: any) => void;
}

const renderQueue: RenderTask[] = [];
let isProcessingQueue = false;
let offscreenRenderer: THREE.WebGLRenderer | null = null;
let pmremGenerator: THREE.PMREMGenerator | null = null;
let roomEnvTarget: THREE.WebGLRenderTarget | null = null;
let contextReleaseTimer: NodeJS.Timeout | null = null;

function getSharedOffscreenRenderer(): {
  renderer: THREE.WebGLRenderer;
  env: THREE.Texture;
} {
  if (contextReleaseTimer) {
    clearTimeout(contextReleaseTimer);
    contextReleaseTimer = null;
  }

  if (!offscreenRenderer) {
    offscreenRenderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      preserveDrawingBuffer: true,
      powerPreference: "low-power",
    });
    offscreenRenderer.setSize(600, 800);
    offscreenRenderer.setPixelRatio(1.5);
    offscreenRenderer.outputColorSpace = THREE.SRGBColorSpace;
    offscreenRenderer.toneMapping = THREE.NeutralToneMapping;
    offscreenRenderer.setClearColor(0x000000, 0);

    pmremGenerator = new THREE.PMREMGenerator(offscreenRenderer);
    pmremGenerator.compileEquirectangularShader();
    const roomScene = new RoomEnvironment();
    roomEnvTarget = pmremGenerator.fromScene(roomScene, 0.04);
  }

  return {
    renderer: offscreenRenderer,
    env: roomEnvTarget!.texture,
  };
}

function scheduleContextRelease() {
  if (contextReleaseTimer) clearTimeout(contextReleaseTimer);
  contextReleaseTimer = setTimeout(() => {
    if (renderQueue.length === 0 && offscreenRenderer) {
      if (roomEnvTarget) {
        roomEnvTarget.dispose();
        roomEnvTarget = null;
      }
      if (pmremGenerator) {
        pmremGenerator.dispose();
        pmremGenerator = null;
      }
      offscreenRenderer.dispose();
      offscreenRenderer.forceContextLoss();
      offscreenRenderer = null;
    }
  }, 1500);
}

function setupSceneLights(scene: THREE.Scene, envTexture: THREE.Texture) {
  scene.environment = envTexture;
  scene.environmentIntensity = 0.9;

  const ambient = new THREE.AmbientLight(
    STUDIO_CONFIG.ambientColor,
    STUDIO_CONFIG.ambientIntensity
  );
  scene.add(ambient);

  const keyLight = new THREE.DirectionalLight(
    STUDIO_CONFIG.keyColor,
    STUDIO_CONFIG.keyIntensity
  );
  keyLight.position.copy(STUDIO_CONFIG.keyPos);
  scene.add(keyLight);

  const rimLight = new THREE.DirectionalLight(
    STUDIO_CONFIG.rimColor,
    STUDIO_CONFIG.rimIntensity
  );
  rimLight.position.copy(STUDIO_CONFIG.rimPos);
  scene.add(rimLight);
}

async function renderStillInternal(key: string): Promise<string> {
  await labelFontsReady();

  const { renderer, env } = getSharedOffscreenRenderer();
  const scene = new THREE.Scene();
  setupSceneLights(scene, env);

  const camera = new THREE.PerspectiveCamera(
    STUDIO_CONFIG.fov,
    STUDIO_CONFIG.aspect,
    0.1,
    50
  );

  let tempObject: THREE.Object3D | null = null;

  if (key.startsWith("can-")) {
    const isBack = key.startsWith("can-back-");
    const id = isBack ? key.replace("can-back-", "") : key.replace("can-", "");
    const flavour = flavours.find((f) => f.id === id) || flavours[0];

    const canObj = createCan(flavour);
    tempObject = canObj.root;
    scene.add(tempObject);

    camera.position.copy(STUDIO_CONFIG.canCamPos);
    camera.lookAt(0, 0, 0);

    const pose = isBack ? CAN_POSE.back : CAN_POSE.front;
    tempObject.rotation.y = pose.y;
    tempObject.rotation.z = pose.z;
    tempObject.position.set(0, 0, 0);
  } else if (key === "coconut-whole") {
    const coconutObj = createCoconut();
    tempObject = coconutObj.root;
    scene.add(tempObject);

    tempObject.rotation.set(0.12, 0.8, -0.18);
    tempObject.position.set(0, 0, 0);

    camera.position.set(0, 0.35, 6.2);
    camera.lookAt(0, 0, 0);
  } else if (key === "coconut-half") {
    const coconutObj = createCoconut();
    tempObject = coconutObj.root;
    scene.add(tempObject);

    // Top hidden; rotation .95,.4,.08; y .35; camera (0,.3,6.4)
    coconutObj.top.visible = false;
    tempObject.rotation.set(0.95, 0.4, 0.08);
    tempObject.position.set(0, 0.35, 0);

    camera.position.set(0, 0.3, 6.4);
    camera.lookAt(0, 0, 0);
  } else if (key === "coconut-pair") {
    const coconutObj = createCoconut();
    tempObject = coconutObj.root;
    scene.add(tempObject);

    // top at (-.25,.95,.1) rot (-.9,0,.5), bottom at (.15,-.35,0) rot (.85,.3,-.1); camera (0,.2,7.4)
    coconutObj.top.position.set(-0.25, 0.95, 0.1);
    coconutObj.top.rotation.set(-0.9, 0, 0.5);

    coconutObj.bottom.position.set(0.15, -0.35, 0);
    coconutObj.bottom.rotation.set(0.85, 0.3, -0.1);

    camera.position.set(0, 0.2, 7.4);
    camera.lookAt(0, 0, 0);
  }

  renderer.render(scene, camera);

  // Convert canvas to blob / object URL
  return new Promise<string>((resolve, reject) => {
    renderer.domElement.toBlob(
      (blob) => {
        if (!blob) {
          reject(new Error("Failed to capture still canvas blob"));
          return;
        }
        const url = URL.createObjectURL(blob);
        resolve(url);
      },
      "image/webp",
      0.92
    );
  });
}

async function processQueue() {
  if (isProcessingQueue) return;
  isProcessingQueue = true;

  while (renderQueue.length > 0) {
    const task = renderQueue.shift()!;
    try {
      const url = await renderStillInternal(task.key);
      stillCache.set(task.key, url);
      task.resolve(url);
    } catch (err) {
      task.reject(err);
    }
  }

  isProcessingQueue = false;
  scheduleContextRelease();
}

export function requestStill(key: string): Promise<string> {
  if (stillCache.has(key)) {
    return Promise.resolve(stillCache.get(key)!);
  }
  if (pendingPromises.has(key)) {
    return pendingPromises.get(key)!;
  }

  const promise = new Promise<string>((resolve, reject) => {
    renderQueue.push({ key, resolve, reject });
    processQueue();
  });

  pendingPromises.set(key, promise);
  return promise;
}
