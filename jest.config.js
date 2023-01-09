module.exports = {
  setupFiles: ["<rootDir>/jest.setup.js"],
  moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "json"],
  preset: "ts-jest",
  transform: {
    "^.+\\.(js|jsx)?$": "babel-jest",
    "^.+\\.vue$": "@vue/vue3-jest",
  },
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
  },
  // globals: {
  //   "ts-jest": {
  //     isolatedModules: true,
  //   },
  // },
};
