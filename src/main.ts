import * as THREE from 'three';

// scene
const scene: THREE.Scene = new THREE.Scene();

// Mesh1
const geometry1: THREE.BoxGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
const material1: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({color: "yellow"});
const cube1: THREE.Mesh = new THREE.Mesh(geometry1, material1);
cube1.position.set(-2, 1, 0);

// Mesh2
const geometry2: THREE.BoxGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
const material2: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({color: "red"});
const cube2: THREE.Mesh = new THREE.Mesh(geometry2, material2);
cube2.position.set(2, 1, 0);

// Mesh3
const geometry3: THREE.BoxGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
const material3: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({color: "blue"});
const cube3: THREE.Mesh = new THREE.Mesh(geometry3, material3);
cube3.position.set(0, 1, 0);

// Mesh4
const geometry4: THREE.BoxGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
const material4: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({color: "green"});
const cube4: THREE.Mesh = new THREE.Mesh(geometry4, material4);
cube4.position.set(-2, -1, 0);

// Mesh5
const geometry5: THREE.BoxGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
const material5: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({color: "purple"});
const cube5: THREE.Mesh = new THREE.Mesh(geometry5, material5);
cube5.position.set(0, -1, 0);

// Mesh6
const geometry6: THREE.BoxGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
const material6: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({color: "orange"});
const cube6: THREE.Mesh = new THREE.Mesh(geometry6, material6);
cube6.position.set(2, -1, 0);

cube1.lookAt(cube6.position);

scene.add(cube1, cube2, cube3, cube4, cube5, cube6);

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

    renderer.render(scene, camera);

    requestAnimationFrame(animate)
}
animate();