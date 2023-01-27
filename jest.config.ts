export default {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ["**/*.{ts,tsx}"],
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: ["/node_modules/", "./*.config.*"],
  coverageProvider: "v8",
  coverageThreshold: {
    "global": {
      "branches": 95,
      "functions": 95,
      "lines": 95,
      "statements": -5
    }
  },
  moduleFileExtensions: ["ts", "tsx", "js", "mjs", "cjs", "jsx", "json", "node"],
  verbose: true,
};
