import * as THREE from "three";

export const sharedRevealUniform = {
  value: 1.0,
};

export function withReveal<T extends THREE.Material>(material: T): T {
  const customOnBeforeCompile = material.onBeforeCompile.bind(material);

  material.onBeforeCompile = (shader, renderer) => {
    customOnBeforeCompile(shader, renderer);

    shader.uniforms.uReveal = sharedRevealUniform;

    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <common>",
      `#include <common>
       uniform float uReveal;`
    );

    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <dithering_fragment>",
      `#include <dithering_fragment>
       // Mix towards clay when uReveal < 1
       float lum = dot(gl_FragColor.rgb, vec3(0.299, 0.587, 0.114));
       vec3 clayColor = vec3(lum * 0.7 + 0.15);
       gl_FragColor.rgb = mix(clayColor, gl_FragColor.rgb, uReveal);`
    );
  };

  return material;
}
