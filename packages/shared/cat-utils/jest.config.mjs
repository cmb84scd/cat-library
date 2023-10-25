import config from '../../../jest.config.mjs'

export default {
  ...config,
  coveragePathIgnorePatterns: ['./src/index.ts'],
}
