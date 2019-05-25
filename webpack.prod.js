const path = require('path');

//빌드 전에 output 디렉토리를 제거해주는 플러그인
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        'basiceditor': [
            path.join(__dirname, 'src', 'index.tsx')
        ]
    },

    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.(ts|js)x?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(ts|js)x?$/,
                use: 'ts-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },

    output: {
        filename: '[name].min.js',
        path: path.resolve(__dirname, 'dist')
    },

    plugins: [
        new CleanWebpackPlugin()
    ],

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    }   
}