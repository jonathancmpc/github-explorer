module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-typescript',
    ['@babel/preset-react', {
      runtime: 'automatic' /* Agora não precisamos chmar o React em todo arquivo que utilizamos o jsx */
    }]
  ]
}