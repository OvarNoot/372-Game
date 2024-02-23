import * as THREE from 'three';
import { FBXLoader } from './node_modules/three/examples/jsm/loaders/FBXLoader.js';
import { OrbitControls } from './node_modules/three/examples/jsm/controls/OrbitControls.js';

let previousTime = performance.now(); // Initialize previousTime with the current time
let player;
let cubes = [];
let playerSpeed = 0.02;
let sprintMultiplier = 1.5;
let isSprinting = false;
let startTime = null;
let scene, camera, renderer, controls, mixer;

function init() {
    
}