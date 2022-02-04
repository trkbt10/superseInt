"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function JestConfig() {
    return {
        roots: ["<rootDir>"],
        testMatch: ["**/*.spec.[tj]s?(x)"],
        transform: {
            "^.+\\.(ts|tsx)$": "ts-jest",
        },
        testPathIgnorePatterns: ["/node_modules/"],
        verbose: true,
    };
}
exports.default = JestConfig;
