module.exports = {
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.svelte$': 'svelte-jester',
  },
  testPathIgnorePatterns: ['/node_modules/'],
  transformIgnorePatterns: ['/node_modules/'],
  moduleFileExtensions: ['js', 'json', 'svelte'],
  verbose: true,
  bail: false,
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};
