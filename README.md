# Personal Website v2

Migrated from [Personal Website v1](https://github.com/melaniebrgr/personal-website). Feature React, Vite, React Router. Some old code was ported directly for efficiency, e.g. jQuery is still a dependency for the nav behaviour.

## To do

- [ ] Fix sass style depraction warnings OR
- [ ] convert to modern vanilla CSS, using variables
- [ ] remove jQuery

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

Will be deployed as a static site to AWS.

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```
