/** @type {import('ts-jest').JestConfigWithTsJest} */
const config = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{ts,tsx}'],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 95,
      lines: 95,
      statements: -5,
    },
  },
  preset: 'ts-jest',
  reporters: ["default", "jest-junit"],
}

export default config
