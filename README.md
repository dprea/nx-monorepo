# NX Monorepo Starter

## Before you start

- Node v16.19.0+

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

## Common Scripts

Generate Lib

"npx nx g @nx/js:library my-lib --bundler=vite --publishable --unitTestRunner=vitest" --importPath=@myorg/components

## Understand this workspace

Run `nx graph` to see a diagram of the dependencies of the projects.

## Remote caching

Run `npx nx connect-to-nx-cloud` to enable [remote caching](https://nx.app) and make CI faster.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.
