import {
  defineConfig,
} from 'eslint/config';
import {
  vueConfig, tailwindConfig,
} from '@hdnax/nuclint';

export default defineConfig([
  ...vueConfig,
  ...tailwindConfig('./src/style.css'),
]);
