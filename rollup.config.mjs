 import typescript from '@rollup/plugin-typescript';
 import { nodeResolve } from '@rollup/plugin-node-resolve';
 import replace from '@rollup/plugin-replace';
 
 export default {
    input: 'src/app.ts',
    output: {
        file: 'dist/script.js',
        format: 'cjs',
    },
    plugins: [
        nodeResolve(),
        typescript({
            tsconfig: './tsconfig.json',
        }),
        replace({
            'process.env.NODE_ENV': JSON.stringify('production'),
            preventAssignment: true,
        }),
    ],
 };
 