# NX Monorepo Starter

## Before you start

- Node v16.19.0+
- TODO: Autoformat on Save in VSCode instructions

## Getting Started

- npm install
- npm run start:client

## Features

- NX Monorepo
- TypeScript
- Prettier
- ESLint (Prettier configured as ESLint rule to enable auto save fixes)
- Components package using Radix UI and styled with Tailwind (Thanks to @shadcn)
- Husky
  - Pre-commit linting
  - Commit Message checking for conventional commits with commitlint
- React
- Vite
- Vitest
- Cypress

## NX Dev Basics

TODO: project.json vs package.json
TODO: Installing Dependencies
TODO: Generating Libs

## Common Scripts

Generate Lib

"npx nx g @nx/js:library my-lib --bundler=vite --publishable --unitTestRunner=vitest" --importPath=@myorg/components

## Contribution Guide

TODO: Conventional Commits
TODO: Pull Request Template
TODO: Protect Master Branch

## Understand this workspace

Run `nx graph` to see a diagram of the dependencies of the projects.

## Remote caching

Run `npx nx connect-to-nx-cloud` to enable [remote caching](https://nx.app) and make CI faster.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.
