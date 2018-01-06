module.exports = {
  prompts: {
    name: {
      type: "string",
      required: true,
      label: "Project name"
    },
    description: {
      type: "string",
      required: true,
      label: "Project description",
      default: "A Vue.js 2.0 library project"
    },
    author: {
      type: "string",
      label: "Author"
    },
    email: {
      type: "string",
      required: true,
      label: "Email"
    },
    repos: {
      type: "string",
      required: true,
      label: "Github repository URL",
      default: "user/repository"
    }
  },
  "skipInterpolation": "src/**/*.vue"
}