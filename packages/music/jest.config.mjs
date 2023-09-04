import config from "../../jest.config.mjs";
export default {
  ...config,
  coveragePathIgnorePatterns: [
    './src/utils/interfaces.ts',
    './src/index.ts',
  ],
}
