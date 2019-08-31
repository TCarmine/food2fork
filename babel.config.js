module.exports = function (api) {
    api.cache(true);
    presets: [ "@babel/preset-env","@babel/preset-react"  
       {
          useBuiltIns: "usage",
          corejs: 3
       }],
    plugins: [ 
        ["@babel/transform-runtime", 
            {
                  corejs: 3,
            } 
        ],
    "@babel/plugin-transform-arrow-functions", 
    "@babel/plugin-proposal-class-properties", 
   ]
   return {
    presets,
    plugins,
  }
  }