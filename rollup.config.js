import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import sucrase from "@rollup/plugin-sucrase";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import { dts } from "rollup-plugin-dts";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";

const packageJson = require("./package.json");

export default [
  {
    input: "./src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
        name: "react-lib"
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true
      }
    ],
    plugins: [
      external(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        exclude: [
          "**/__tests__",
          "**/*.spec.tsx",
          "**/*.spec.ts",
          "**/__stories__",
          "**/*.stories.tsx",
          "**/*.stories.ts"
        ]
      }),
      terser(),
      postcss({
        config: {
          path: "./postcss.config.js"
        },
        extensions: [".css"],
        minimize: true,
        inject: {
          insertAt: "top"
        }
      }),
      babel({
        babelHelpers: "bundled",
        exclude: "node_modules/**"
      }),
      sucrase({
        exclude: ["node_modules/**"],
        transforms: ["typescript", "jsx"]
      })
    ],
    external: ["react", "react-dom"]
  },
  {
    input: "dist/esm/types/src/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    external: [/\.css$/],
    plugins: [dts()]
  }
];
