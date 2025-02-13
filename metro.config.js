/* eslint-disable @typescript-eslint/no-require-imports */
const { getDefaultConfig } = require('@expo/metro-config')

const defaultConfig = getDefaultConfig(__dirname)

defaultConfig.resolver.sourceExts = ['js', 'jsx', 'json', 'ts', 'tsx', 'cjs', 'mjs']
defaultConfig.resolver.assetExts = ['glb', 'gltf', 'png', 'jpg']

module.exports = defaultConfig
