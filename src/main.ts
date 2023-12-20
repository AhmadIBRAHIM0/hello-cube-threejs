import * as THREE from 'three';

// scene
const scene: THREE.Scene = new THREE.Scene();

// Mesh
const geometry: THREE.BoxGeometry = new THREE.BoxGeometry(1, 1, 1);
const material: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({color: "yellow"});
const cube: THREE.Mesh = new THREE.Mesh(geometry, material);

scene.add(cube);

interface IAspect {
    width: number;
    height: number;
}

// Camera
const aspect: IAspect = {
    width: window.innerWidth,
    height: window.innerHeight
};

const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(75, aspect.width / aspect.height);
camera.position.z = 3;

scene.add(camera);

// Renderer
const canvas = document.querySelector(".draw");

if (!canvas) {
    throw new Error("Canvas not found");
}

const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(aspect.width, aspect.height);

// Animation
const animate = (): void => {

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01 * Math.PI * 2;

    renderer.render(scene, camera);

    requestAnimationFrame(animate)
}
animate();