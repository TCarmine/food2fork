module.exports = function (api) {
    api.cache(true);
    const presets= [
        [ 
            "@babel/preset-env",
              {
                    useBuiltIns: "usage",
                    corejs: 3
              }
         ],
         ["@babel/preset-react"],
         ["@babel/preset-flow"],
    ];  
    const plugins = [ 
        ["@babel/transform-runtime", 
            {
                  corejs: 3,
            } 
        ],
    "@babel/plugin-transform-arrow-functions", 
    "@babel/plugin-proposal-class-properties", 
   ];
    return {
        presets,
        plugins,
    };
  }