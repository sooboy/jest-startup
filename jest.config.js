module.exports = {
    roots: [
        "<rootDir>/"
    ],
    testRegex: '\\.test\\.(jsx?|tsx?|ts)$',
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};