import * as THREE from "./assets/vendor/three.module.min.js";

const canvas = document.querySelector("#signal-core");
const isMobile = window.matchMedia("(max-width: 900px)").matches;
const prefersLowPower = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let storedMotionPreference = "on";

try {
  storedMotionPreference = sessionStorage.getItem("portfolio-motion") || "on";
} catch (error) {
  console.info("Motion preference storage is unavailable.");
}

let renderer;
try {
  renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: !isMobile,
    alpha: true,
    powerPreference: "high-performance"
  });
} catch (error) {
  document.body.classList.add("no-webgl");
}

if (renderer) {
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isMobile ? 1.25 : 1.8));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x05080b, 0.045);

  const camera = new THREE.PerspectiveCamera(38, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.set(0, 0.1, isMobile ? 8.8 : 7.5);

  const core = new THREE.Group();
  scene.add(core);

  const shellMaterial = new THREE.MeshStandardMaterial({
    color: 0x0b2735,
    emissive: 0x0a668d,
    emissiveIntensity: 0.55,
    metalness: 0.72,
    roughness: 0.3,
    transparent: true,
    opacity: 0.78,
    wireframe: true
  });
  const shell = new THREE.Mesh(new THREE.IcosahedronGeometry(1.22, isMobile ? 1 : 2), shellMaterial);
  core.add(shell);

  const innerMaterial = new THREE.MeshStandardMaterial({
    color: 0x102833,
    emissive: 0x5bc8ff,
    emissiveIntensity: 1.25,
    metalness: 0.45,
    roughness: 0.22,
    transparent: true,
    opacity: 0.44
  });
  const inner = new THREE.Mesh(new THREE.IcosahedronGeometry(0.58, 2), innerMaterial);
  core.add(inner);

  const ringMaterial = new THREE.MeshBasicMaterial({
    color: 0x5bc8ff,
    transparent: true,
    opacity: 0.42,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });
  const rings = [];
  [
    [1.64, 0.012, 0, 0],
    [1.82, 0.009, Math.PI / 2.6, Math.PI / 4],
    [2.02, 0.007, Math.PI / 2, -Math.PI / 6]
  ].forEach(([radius, tube, x, y]) => {
    const ring = new THREE.Mesh(new THREE.TorusGeometry(radius, tube, 8, 160), ringMaterial.clone());
    ring.rotation.x = x;
    ring.rotation.y = y;
    core.add(ring);
    rings.push(ring);
  });

  const nodeMaterial = new THREE.MeshBasicMaterial({
    color: 0x7cffc5,
    transparent: true,
    opacity: 0.95,
    blending: THREE.AdditiveBlending
  });
  const nodes = [];
  const nodeCount = isMobile ? 11 : 18;
  const golden = Math.PI * (3 - Math.sqrt(5));

  for (let index = 0; index < nodeCount; index += 1) {
    const y = 1 - (index / (nodeCount - 1)) * 2;
    const radius = Math.sqrt(1 - y * y);
    const theta = golden * index;
    const position = new THREE.Vector3(
      Math.cos(theta) * radius,
      y,
      Math.sin(theta) * radius
    ).multiplyScalar(1.68);
    const node = new THREE.Mesh(new THREE.SphereGeometry(isMobile ? 0.035 : 0.045, 12, 12), nodeMaterial.clone());
    node.position.copy(position);
    core.add(node);
    nodes.push({
      mesh: node,
      base: position.clone(),
      direction: position.clone().normalize().multiplyScalar(0.8 + (index % 4) * 0.19)
    });
  }

  const connectionPositions = [];
  for (let i = 0; i < nodes.length; i += 1) {
    for (let j = i + 1; j < nodes.length; j += 1) {
      if (nodes[i].base.distanceTo(nodes[j].base) < 1.55) {
        connectionPositions.push(
          nodes[i].base.x, nodes[i].base.y, nodes[i].base.z,
          nodes[j].base.x, nodes[j].base.y, nodes[j].base.z
        );
      }
    }
  }
  const connectionGeometry = new THREE.BufferGeometry();
  connectionGeometry.setAttribute("position", new THREE.Float32BufferAttribute(connectionPositions, 3));
  const connections = new THREE.LineSegments(
    connectionGeometry,
    new THREE.LineBasicMaterial({
      color: 0x5bc8ff,
      transparent: true,
      opacity: 0.18,
      blending: THREE.AdditiveBlending
    })
  );
  core.add(connections);

  const particleCount = isMobile ? 700 : 2200;
  const particlePositions = new Float32Array(particleCount * 3);
  const particleSizes = new Float32Array(particleCount);
  for (let index = 0; index < particleCount; index += 1) {
    const radius = 3 + Math.random() * 8;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    particlePositions[index * 3] = Math.sin(phi) * Math.cos(theta) * radius;
    particlePositions[index * 3 + 1] = Math.cos(phi) * radius * 0.6;
    particlePositions[index * 3 + 2] = Math.sin(phi) * Math.sin(theta) * radius;
    particleSizes[index] = 0.5 + Math.random() * 1.5;
  }
  const particleGeometry = new THREE.BufferGeometry();
  particleGeometry.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
  particleGeometry.setAttribute("size", new THREE.BufferAttribute(particleSizes, 1));
  const particles = new THREE.Points(
    particleGeometry,
    new THREE.PointsMaterial({
      color: 0x5bc8ff,
      size: isMobile ? 0.018 : 0.022,
      transparent: true,
      opacity: 0.34,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    })
  );
  scene.add(particles);

  const streamPositions = new Float32Array((isMobile ? 260 : 680) * 3);
  for (let index = 0; index < streamPositions.length / 3; index += 1) {
    const t = index / (streamPositions.length / 3);
    const angle = t * Math.PI * 12;
    streamPositions[index * 3] = Math.cos(angle) * (2.5 + t * 4);
    streamPositions[index * 3 + 1] = (t - 0.5) * 7;
    streamPositions[index * 3 + 2] = Math.sin(angle) * (2.5 + t * 4);
  }
  const streamGeometry = new THREE.BufferGeometry();
  streamGeometry.setAttribute("position", new THREE.BufferAttribute(streamPositions, 3));
  const stream = new THREE.Points(
    streamGeometry,
    new THREE.PointsMaterial({
      color: 0x7cffc5,
      size: 0.025,
      transparent: true,
      opacity: 0.22,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    })
  );
  scene.add(stream);

  scene.add(new THREE.AmbientLight(0x20313c, 0.42));
  const keyLight = new THREE.PointLight(0x5bc8ff, 7, 18);
  keyLight.position.set(3, 4, 5);
  scene.add(keyLight);
  const rimLight = new THREE.PointLight(0x7cffc5, 5, 14);
  rimLight.position.set(-4, -2, 3);
  scene.add(rimLight);

  const state = {
    progress: 0,
    targetProgress: 0,
    stage: 0,
    targetStage: 0,
    pointerX: 0,
    pointerY: 0,
    stopped: document.documentElement.classList.contains("motion-off")
  };

  const stageSettings = [
    { x: isMobile ? 1.2 : 2.65, y: 0.2, z: 0, scale: isMobile ? 0.72 : 1.02 },
    { x: isMobile ? 1.5 : 2.35, y: 0, z: 0, scale: isMobile ? 0.8 : 1.1 },
    { x: -3.2, y: 0.7, z: -1.2, scale: 0.68 },
    { x: 3.1, y: 0.1, z: -0.8, scale: 0.78 },
    { x: 2.8, y: 0, z: 0, scale: 1.34 }
  ];
  core.position.set(stageSettings[0].x, stageSettings[0].y, stageSettings[0].z);
  core.scale.setScalar(stageSettings[0].scale);

  window.addEventListener("signal-progress", (event) => {
    state.targetProgress = event.detail.progress;
  });
  window.addEventListener("signal-stage", (event) => {
    state.targetStage = event.detail.stage;
  });
  window.addEventListener("portfolio-motion", (event) => {
    state.stopped = event.detail.stopped;
    if (state.stopped) {
      window.cancelAnimationFrame(animationFrame);
      renderStatic();
    } else {
      animationFrame = window.requestAnimationFrame(animate);
    }
  });

  window.addEventListener("pointermove", (event) => {
    state.pointerX = (event.clientX / window.innerWidth - 0.5) * 2;
    state.pointerY = (event.clientY / window.innerHeight - 0.5) * 2;
  }, { passive: true });

  function resize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, window.innerWidth < 900 ? 1.25 : 1.8));
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  window.addEventListener("resize", resize, { passive: true });

  let animationFrame;

  function updateScene(elapsed) {
    state.progress += (state.targetProgress - state.progress) * 0.065;
    state.stage += (state.targetStage - state.stage) * 0.05;

    const lowerStage = Math.floor(state.stage);
    const upperStage = Math.min(stageSettings.length - 1, Math.ceil(state.stage));
    const mix = state.stage - lowerStage;
    const from = stageSettings[lowerStage] || stageSettings[0];
    const to = stageSettings[upperStage] || from;

    const targetX = THREE.MathUtils.lerp(from.x, to.x, mix);
    const targetY = THREE.MathUtils.lerp(from.y, to.y, mix);
    const targetZ = THREE.MathUtils.lerp(from.z, to.z, mix);
    const targetScale = THREE.MathUtils.lerp(from.scale, to.scale, mix);

    core.position.x += (targetX + state.pointerX * 0.12 - core.position.x) * 0.055;
    core.position.y += (targetY - state.pointerY * 0.08 - core.position.y) * 0.055;
    core.position.z += (targetZ - core.position.z) * 0.055;
    const scale = core.scale.x + (targetScale - core.scale.x) * 0.055;
    core.scale.setScalar(scale);

    const explode = Math.sin(Math.min(1, state.progress) * Math.PI) * 1.32;
    nodes.forEach((node, index) => {
      node.mesh.position.copy(node.base).addScaledVector(node.direction, explode);
      node.mesh.scale.setScalar(1 + explode * 1.9 + Math.sin(elapsed * 2.2 + index) * 0.12);
      node.mesh.material.opacity = 0.7 + Math.sin(elapsed * 1.6 + index) * 0.2;
    });

    shell.rotation.y = elapsed * 0.12 + state.progress * Math.PI * 1.2;
    shell.rotation.x = elapsed * 0.07 + state.progress * 0.5;
    shell.scale.setScalar(1 + explode * 0.22);
    shellMaterial.emissiveIntensity = 0.5 + explode * 0.6;

    inner.rotation.y = -elapsed * 0.32;
    inner.rotation.z = elapsed * 0.18;
    inner.scale.setScalar(1 + Math.sin(elapsed * 1.4) * 0.07 + explode * 0.18);
    innerMaterial.emissiveIntensity = 1.1 + explode * 1.5;

    rings[0].rotation.z = elapsed * 0.18 + state.progress * 2.2;
    rings[1].rotation.y = elapsed * 0.13 - state.progress * 1.8;
    rings[2].rotation.x = Math.PI / 2 + elapsed * 0.1 + state.progress;
    rings.forEach((ring, index) => {
      ring.scale.setScalar(1 + explode * (0.26 + index * 0.08));
      ring.material.opacity = 0.28 + explode * 0.32;
    });

    connections.scale.setScalar(1 + explode * 0.24);
    connections.material.opacity = 0.12 + explode * 0.16;

    particles.rotation.y = elapsed * 0.018;
    particles.rotation.x = Math.sin(elapsed * 0.07) * 0.08;
    stream.rotation.y = -elapsed * 0.05;
    stream.position.y = Math.sin(elapsed * 0.2) * 0.4;

    camera.position.x += (state.pointerX * 0.08 - camera.position.x) * 0.025;
    camera.position.y += (-state.pointerY * 0.06 + 0.1 - camera.position.y) * 0.025;
    camera.position.z += ((isMobile ? 8.8 : 7.5) - explode * 0.38 - camera.position.z) * 0.04;
    camera.lookAt(0, 0, 0);
  }

  function renderStatic() {
    state.targetProgress = 0.5;
    state.progress = 0.5;
    updateScene(0);
    renderer.render(scene, camera);
  }

  function animate(timestamp = 0) {
    if (state.stopped || document.hidden) return;
    const elapsed = timestamp * 0.001;
    updateScene(elapsed);
    renderer.render(scene, camera);
    animationFrame = window.requestAnimationFrame(animate);
  }

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      window.cancelAnimationFrame(animationFrame);
    } else if (!state.stopped) {
      animationFrame = window.requestAnimationFrame(animate);
    }
  });

  updateScene(0);
  renderer.render(scene, camera);

  if (state.stopped || (prefersLowPower && storedMotionPreference === "off")) {
    renderStatic();
  } else {
    animationFrame = window.requestAnimationFrame(animate);
  }
}
