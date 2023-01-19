module.exports = {
  setupFiles: ['<rootDir>/jest.setup.ts'],
  preset: 'ts-jest',
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.(js|jsx)?$': 'babel-jest',
    '^.+\\.vue$': '@vue/vue3-jest',
  },
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  testEnvironmentOptions: {
    customExportConditions: ['node', 'node-addons'],
  },
}
