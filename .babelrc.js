module.exports = {
    presets: [[
        '@babel/preset-env', {
            modules: false
        }
    ]],
    plugins: [
        "@babel/plugin-syntax-class-properties",
        [
          "@babel/plugin-proposal-class-properties",
          {
            "loose": true
          }
        ]
      ]
};