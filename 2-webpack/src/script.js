import './style.css'
import * as three from 'three'


// Scene
const scene = new three.Scene()

// Red Cube
const geometry = new three.BoxGeometry(1,1,1)
const material = new three.MeshBasicMaterial({color: 0xff0000})
const mesh = new three.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = { 
    width: 800, 
    height: 600
}


// Camera
const camera = new three.PerspectiveCamera(75, sizes.width/ sizes.height) //(FOV, Aspect Ratio, Renderer)
camera.position.z = 3
camera.position.x = 0
camera.position.y = 1
scene.add(camera)

// Renderer
const canvas = document.querySelector('.webgl')
const renderer = new three.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

renderer.render(scene,camera)