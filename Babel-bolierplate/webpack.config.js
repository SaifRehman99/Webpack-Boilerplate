 const path = require('path');

 module.exports = {
     //polyfill use to run before all things to support runtime generator
     entry : ['babel-polyfill','./src/index.js'],
     output : {
         path : path.resolve(__dirname, 'public/scripts'),
         filename : 'bundle.js'
     },

    //  Adding babel support
    module:{
        rules:[{
            test: /\.js$/,
            exclude : /node_modules/,
            use:{
                loader: 'babel-loader',
                options:{
                    presets:['env']
                }
            }
        }]
    },
    //changing the live update in code  
    devServer:{
        contentBase:path.resolve(__dirname , 'public'),
        publicPath: '/scripts/'
    },
    //through this we can see our original code using console
    devtool : 'source-map' 
 }  