import { ReactThreeFiber } from '@react-three/fiber'
import * as THREE from 'three'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      // Elementos 3D
      ambientLight: ReactThreeFiber.Object3DNode<THREE.AmbientLight, typeof THREE.AmbientLight>
      directionalLight: ReactThreeFiber.Object3DNode<
        THREE.DirectionalLight,
        typeof THREE.DirectionalLight
      >
      mesh: ReactThreeFiber.Object3DNode<THREE.Mesh, typeof THREE.Mesh>
      boxGeometry: ReactThreeFiber.Object3DNode<THREE.BoxGeometry, typeof THREE.BoxGeometry>
      sphereGeometry: ReactThreeFiber.Object3DNode<
        THREE.SphereGeometry,
        typeof THREE.SphereGeometry
      >
      coneGeometry: ReactThreeFiber.Object3DNode<THREE.ConeGeometry, typeof THREE.ConeGeometry>
      meshStandardMaterial: ReactThreeFiber.Object3DNode<
        THREE.MeshStandardMaterial,
        typeof THREE.MeshStandardMaterial
      >
    }
  }
}
