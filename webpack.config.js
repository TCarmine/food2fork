const path = require('path');
const HtmlWebpackPlugin =  require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry : {
        main: [
		   './app/src/index.js',
        ]
    },
    mode: 'development',    
    output : {
        path : path.resolve(__dirname , 'dist'),
        filename: 'index_bundle.js'
    },
    module : {
  
        rules : [
            { 
                test : /\.(js)$/, 
                exclude: /(node_modules)/,
                use:{
                    loader:'babel-loader',
                    options: {
                        plugins: ['@babel/plugin-transform-arrow-functions']
                      }
                }
            },
            {
              test: /\.css$/,
              use: [
                "style-loader",
                MiniCssExtractPlugin.loader,
                "css-loader",
                // "postcss-loader"
              ]
            }    

        ]
    },
    plugins : [
        new HtmlWebpackPlugin ({
            template : 'app/src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: "app/src/style.css"
        }),
    ]

}
