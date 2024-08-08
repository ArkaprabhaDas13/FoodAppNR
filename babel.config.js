module.exports = {
    presets: [
      ['@babel/preset-env', {targets: {node: 'current'}}],
      ['@babel/preset-react', {runtime: "automatic"}]                 // for including JSX in TEST CASES
    ],
  };