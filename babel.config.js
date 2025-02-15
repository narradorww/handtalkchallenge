module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Ensure 'react-native-reanimated/plugin' is last
      'react-native-reanimated/plugin',
    ],
  }
}

// module.exports = function (api) {
//   api.cache(true)
//   return {
//     presets: [
//       ['babel-preset-expo', { jsxRuntime: 'automatic' }],
//       '@babel/preset-typescript',
//       ['@babel/preset-env', { targets: { node: 'current' } }],
//     ],
//     plugins: [
//       [
//         'module-resolver',
//         {
//           alias: {
//             src: './src',
//           },
//         },
//       ],
//     ],
//   }
// }
