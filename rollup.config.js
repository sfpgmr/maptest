import nodeResolve  from 'rollup-plugin-node-resolve'
import commonjs     from 'rollup-plugin-commonjs'
import babel        from 'rollup-plugin-babel'

export default {
  entry: './src/maptest.mjs',  // エントリーポイント
  dest: './maptest.js', // アウトプット
  plugins: [  // 利用するプラグイン
    nodeResolve({ jsnext: true }), // node_modulesを利用する
    commonjs(), // CommonJSモジュールをES6に変換する
    babel() // ES5に変換する
  ],
  format:'iife'
}