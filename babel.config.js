module.exports = {
    presets: [ "@babel/preset-env", 
       {
          useBuiltIns: "usage",
          corejs: 3,
       }, 
       "@babel/preset-react" ],
    plugins: [ "@babel/plugin-transform-arrow-functions", "@babel/plugin-proposal-class-properties", "@babel/transform-runtime", {
      corejs: 3,
    } ]
  }