import { StorybookConfig } from '@storybook/react-vite';
import { join, dirname } from 'path';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value) {
    return dirname(require.resolve(join(value, 'package.json')));
}

const config: StorybookConfig = {
    stories: ['../packages/**/*.stories.@(ts|tsx|js|jsx)'],
    addons: [
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-links',
    ],
    framework: {
        name: getAbsolutePath('@storybook/react-vite'),
        options: {},
    },
    docs: {
        autodocs: true,
    },
    core: {
        builder: '@storybook/builder-vite',
    },
};
export default config;
