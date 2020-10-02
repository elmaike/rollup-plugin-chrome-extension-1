/* eslint-disable @typescript-eslint/explicit-function-return-type */
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import { chromeExtension } from '../../../src/index'
import { getExtPath } from '../../utils'
import { saveBundle } from '../../save-bundle-plugin'

export default {
  input: getExtPath('options-ui/manifest.json'),
  output: {
    dir: getExtPath('options-ui-dist'),
    format: 'esm',
  },
  plugins: [
    chromeExtension({ verbose: false }),
    typescript(),
    resolve(),
    commonjs(),
    saveBundle(),
  ],
}
