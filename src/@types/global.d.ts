/// <reference types="react-native" />
/// <reference types="@testing-library/jest-native" />
/// <reference types="react" />

import { ThreeElements } from '@react-three/fiber'
import { Object3DNode } from '@react-three/fiber'
import { Mesh, BoxGeometry, MeshStandardMaterial } from 'three'
import { Mesh } from 'three'

declare module '@react-three/fiber' {
  interface ThreeElements {
    mesh: Object3DNode<Mesh, typeof Mesh>
    boxGeometry: Object3DNode<BoxGeometry, typeof BoxGeometry>
    meshStandardMaterial: Object3DNode<MeshStandardMaterial, typeof MeshStandardMaterial>
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements extends ThreeElements {}
  }
}

declare module 'react-native'

declare module '@react-three/fiber'
