import typescript from 'rollup-plugin-typescript2'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import sass from 'rollup-plugin-sass'
import { terser } from 'rollup-plugin-terser'
import replace from '@rollup/plugin-replace'

const overrides = {
  compilerOptions: { declaration: true },
  exclude: ["src/**/*.test.tsx", "src/**/*.stories.tsx", "src/**/*.stories.mdx", "src/setupTests.ts"]
}

const config = {
  input: 'src/index.tsx',
  output: [
    {
      name: 'BambooSword',
      file: 'dist/index.umd.js',
      format: 'umd',
      export: 'named',
      globals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        'axios': 'Axios'
      },
      plugins: [
        terser()
      ]
    }
  ],
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    nodeResolve(),
    commonjs(),
    json(),
    // excludeDependenciesFromBundle(),
    typescript({ tsconfigOverride: overrides }),
    sass({ output: 'dist/input.css' })
  ],
  external: ['react', 'react-dom', 'axios']
}

export default config
