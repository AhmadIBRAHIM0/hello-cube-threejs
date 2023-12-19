import * as THREE from 'three';

// scene
const scene = new THREE.Scene();

// Mesh
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({color: "yellow"});
const cube = new THREE.Mesh(geometry, material);

scene.add(cube);

// Camera
const aspect = {
    width: window.innerWidth,
    height: window.innerHeight
};
const camera = new THREE.PerspectiveCamera(75, aspect.width / aspect.height);
camera.position.z = 3;

scene.add(camera);

// Renderer
const canvas = document.querySelector(".draw");
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(aspect.width, aspect.height);

// Animation
const animate = () => {

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01 * Math.PI * 2;

    renderer.render(scene, camera);

    requestAnimationFrame(animate)
}
animate();