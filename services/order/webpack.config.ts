import path from 'path';
import webpack from 'webpack';
import { BuildPaths, BuildMode, buildWebpack } from '@packages/build_config';
import packageJson from './package.json';

interface envVariables {
    mode?: BuildMode;
    port?: number;
    analyzer?: boolean;
    platform?: BuildPlatform;
}

export type BuildPlatform = 'mobile' | 'desktop';

export default (env: envVariables) => {
    const paths: BuildPaths = {
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
        public: path.resolve(__dirname, 'public')
    };
    const config: webpack.Configuration = buildWebpack({
        port: env.port ?? 3004,
        mode: env.mode ?? 'development',
        paths,
        analyzer: env.analyzer,
        platform: env.platform ?? 'desktop'
    });

    config.plugins.push(
        new webpack.container.ModuleFederationPlugin({
            name: 'order',
            filename: 'remoteEntry.js',
            exposes: {
                './Router': './src/router/Router.tsx'
            },
            shared: {
                ...packageJson.dependencies,
                react: {
                    eager: true,
                    requiredVersion: packageJson.dependencies['react']
                },
                'react-router-dom': {
                    eager: true,
                    requiredVersion: packageJson.dependencies['react-router-dom']
                },
                'react-dom': {
                    eager: true,
                    requiredVersion: packageJson.dependencies['react-router-dom']
                }
            }
        })
    );

    return config;
};
