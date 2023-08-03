const webpack = require('webpack')

const CopywebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const path = require('path')


const IS_DEVELOPMENT = process.env.NODE_ENV === 'dev'


const dirApp = path.join(__dirname,'app')
const dirShared = path.join(__dirname,'shared')
const dirStyles = path.join(__dirname,'styles')
const dirNode = 'node_modules'

module.exports = {
     entry:[
        path.join(dirApp, 'index.js'),
        path.join(dirStyles, 'index.scss')
     ],
     resolve:{
        modules:[
            dirApp,
            dirShared,
            dirStyles,
            dirNode
        ]
     },
     plugins:[
        new webpack.DefinePlugin({
            IS_DEVELOPMENT 
        })  ,
        new CopywebpackPlugin({
            patterns:[
                {
                    from:'./shared',
                    to:''
                }
            ]
        })
     ]
}