export interface UserSettings {
  shape: 'cube' | 'dodecahedron' | 'cone'
  color: string
  rotation: [number, number, number]
  size: number
  backgroundColor: string
}
