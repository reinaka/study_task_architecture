import path from 'path';
import webpack from 'webpack';
import {
    BuildMode,
    BuildPaths,
    BuildPlatform,
    buildWebpack,
} from '@packages/build_config';
import packageJson from './package.json';

interface EnvVariables {
    mode?: BuildMode;
    analyzer?: boolean;
    port?: number;
    platform?: BuildPlatform;
    SHOP_REMOTE_URL?: string;
    ADMIN_REMOTE_URL?: string;
    CONTACTS_REMOTE_URL?: string;
    ORDER_REMOTE_URL?: string;
}

const config = (env: EnvVariables) => {
    const paths: BuildPaths = {
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        public: path.resolve(__dirname, 'public'),
        src: path.resolve(__dirname, 'src')
    };
    const SHOP_REMOTE_URL = env.SHOP_REMOTE_URL ?? 'http://localhost:3001';
    const ADMIN_REMOTE_URL = env.ADMIN_REMOTE_URL ?? 'http://localhost:3002';
    const CONTACTS_REMOTE_URL = env.CONTACTS_REMOTE_URL ?? 'http://localhost:3003';
    const ORDER_REMOTE_URL = env.ORDER_REMOTE_URL ?? 'http://localhost:3004';

    const config: webpack.Configuration = buildWebpack({
        port: env.port ?? 3000,
        mode: env.mode ?? 'development',
        paths,
        analyzer: env.analyzer,
        platform: env.platform ?? 'desktop'
    });

    config.plugins.push(
        new webpack.container.ModuleFederationPlugin({
            name: 'host',
            filename: 'remoteEntry.js',

            remotes: {
                shop: `shop@${SHOP_REMOTE_URL}/remoteEntry.js`,
                admin: `admin@${ADMIN_REMOTE_URL}/remoteEntry.js`,
                contacts: `contacts@${CONTACTS_REMOTE_URL}/remoteEntry.js`,
                order: `order@${ORDER_REMOTE_URL}/remoteEntry.js`
            },
            shared: {
                ...packageJson.dependencies,
                react: {
                    eager: true
                    // requiredVersion: packageJson.dependencies['react'],
                },
                'react-router-dom': {
                    eager: true
                    // requiredVersion: packageJson.dependencies['react-router-dom'],
                },
                'react-dom': {
                    eager: true
                    // requiredVersion: packageJson.dependencies['react-dom'],
                }
            }
        })
    );

    return config;
};

export default config;
