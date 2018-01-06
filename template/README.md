# {{ name }}

[![Build Status](https://travis-ci.org/{{ repos }}.svg?branch=master)](https://travis-ci.org/{{ repos }})
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

> {{ description }}

## Usage

```bash
# Install dependencies
npm install

# Build 
npm run build

# Run development server with storybook
npm run storybook

# Run all tests with lint/jest
npm run test

# Run test in watch mode
npm run test:watch

# Update test snapshot
npm run test:update

# Run linter
npm run lint

# Run linter with auto fix
npm run lint:fix

# Commit files with commitizen (use this instead of git commit)
npm run cz
```

## Deployment

This repository is intended to be used with travisCI for deployment. [Semantic-release](https://github.com/semantic-release/semantic-release) is used and setup to auto-generate changelog, auto-publish to npm and auto-release to github based on commit messages structure. See [Commit Convention](.github/COMMIT_CONVENTION.md).

You may need to install [Semantic-release-cli](https://github.com/semantic-release/cli) to pre-configure properly travisCI with npm and github credentials.

Note : Your npm account must be protected by a two-factor authentification in auth-only mode :
```bash
npm profile enable-2fa auth-only
```

Then activate travisCI for your repository and launch semantic-release-cli :

```bash
npm install -g semantic-release-cli

cd thisRepository

semantic-release-cli setup
# Enter your github and npm credentials to create required token
# Tokens will be injected in your travisCI repository config as environment variables
```

If everything is setup properly, every commit on master will generate a release if needed automatically. For the win.

## Changelog

See the GitHub [release history](https://github.com/{{ repos }}/releases).

## Contributing

See [CONTRIBUTING.md](.github/CONTRIBUTING.md).