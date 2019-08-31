var path = require('path');
var HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
    entry : './app/src/index.js',
    output : {
        path : path.resolve(__dirname , 'dist'),
        filename: 'index_bundle.js'
    },
    module : {
        rules : [
            { 
                test : /\.(js ||.css)$/, 
                exclude: /(node_modules)/,
                use:{
                    ['babel-loader','style-loader', 'css-loader']
                },    
                
                
                options: {
                presets: ['@babel/preset-env',
                          '@babel/react',{
                          'plugins': ['@babel/plugin-proposal-class-properties']}]
                }
            }    
        ]
    },
    mode:'development',
    plugins : [
        new HtmlWebpackPlugin ({
            template : 'app/src/index.html'
        })
    ]

}
