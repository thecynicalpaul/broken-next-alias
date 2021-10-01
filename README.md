This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

This project demonstrates `resolve.alias` no functioning as expected in `next@canary`.

Parse is a fullstack application framework. Their JS SDK has to be imported differently depending on the environment (node/SSR vs client), otherwise code breaks.

In this instance we are trying to alias any imports of `"parse"` to `"parse/node"` when the `isServer` flag is set to `true`. This works correctly in `next@11.1.2`,
but breaks here. (a quick way to swap would be to run `npm i next@latest`).

To test, run `npm run build` and watch chaos unfold.
