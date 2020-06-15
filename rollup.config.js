import typescript from "rollup-plugin-typescript2";
import pkg from "./package.json";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
    },
    {
      file: pkg.browser,
      format: "iife",
      name: "EasyWysiwyg",
      plugins: [terser()],
    },
    {
      file: pkg.module,
      format: "es",
      plugins: [terser()],
    },
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [
    typescript({
      typescript: require("typescript"),
    }),
  ],
};
