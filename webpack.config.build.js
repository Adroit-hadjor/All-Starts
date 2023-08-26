import path from 'path';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { merge } from 'webpack-merge';
import config from './webpack.config.js';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
 const __dirname = dirname(__filename);

export default merge(config, {
    mode: 'production',

    output: {
        path: path.join(__dirname, 'public')
    },

    plugins: [
        new CleanWebpackPlugin()
    ]
});
