module.exports = {
  verifyConditions: [
    "@semantic-release/changelog",
    "@semantic-release/npm",
    "@semantic-release/git",
    "@semantic-release/github"
  ],
  getLastRelease: "@semantic-release/npm",
  prepare: ["@semantic-release/changelog", "@semantic-release/git"],
  publish: ["@semantic-release/npm", "@semantic-release/github"]
};
