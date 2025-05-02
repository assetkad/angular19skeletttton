module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['./setup.jest.ts'],
  testPathIgnorePatterns: ['./node_modules/', './dist/'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  transformIgnorePatterns: ['/node_modules/(?!flat)/'],
};
