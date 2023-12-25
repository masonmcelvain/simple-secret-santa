# Ho, ho, hello!

This repository contains the code that runs the Simple Secret Santa app. If you've come here to request a change or ask a question, head over to the [Issues](https://github.com/masonmcelvain/simple-secret-santa/issues) tab.

## Technical details

[![Type Check](https://github.com/masonmcelvain/simple-secret-santa/actions/workflows/type-check.yml/badge.svg)](https://github.com/masonmcelvain/simple-secret-santa/actions/workflows/type-check.yml)
[![ESLint](https://github.com/masonmcelvain/simple-secret-santa/actions/workflows/eslint.yml/badge.svg)](https://github.com/masonmcelvain/simple-secret-santa/actions/workflows/eslint.yml)
[![Format](https://github.com/masonmcelvain/simple-secret-santa/actions/workflows/format.yml/badge.svg)](https://github.com/masonmcelvain/simple-secret-santa/actions/workflows/format.yml)

### Development

You'll need the latest stable versions of `node` and `pnpm` installed.

Run the development server with:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Visit https://ui.quirrel.dev/ to view queued jobs. More details can be found here: https://docs.quirrel.dev/getting-started/next-js.

### Production

This Next.js app is deployed to [Vercel](https://vercel.com/). The quirrel server is hosted on [Fly.io](https://fly.io/) according to [these](https://dev.to/remixtape/self-hosting-quirrel-5af7) helpful instructions.
