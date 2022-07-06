# A Take on Monorepos

Illuvium Frontend Sessions - June 8th 2022 🗓

# Table of Contents

[So monorepos?](#so-monorepos)

[Why are we discussing this?](#why-are-we-discussing-this)

[Can we improve that experience?](#can-we-improve-that-experience)

[So about that tooling?](#so-about-that-tooling)

[The Turborepo Way 🔨](#the-turborepo-way-)

[Questions?](#questions)

[Further Reading 👩🏽‍💻](#further-reading)

# So monorepos?

A monorepo is basically codebase in which different projects are living within the same repository.

# Why are we discussing this?

We have different repositories (mostly Next.js apps) that are deployed in different `illuvium.io` subdomains.

We need to:

- Replicate common configurations - `eslint`, `testing`, `husky`, `commitlint`, `prettier`, `npmrc`, `PR templates`;
- Depend on common packages - `@illuvium/design`.

Which leads to bad DX (Developer Experience) 😭.

# Can we improve that experience?

YES 💪🏽

Monorepos might provide what we need to bad DX on our FE.

The advantages +:

- Easy code reuse and dependency management;
- Easy refactoring and bug solving;
- Easy version sync;
- One and only source of truth;
- Unified configuration;
- Visibility on all things FE;
- Development speed.

The disadvantages −:

- Tooling knowledge (Learning curve);
- Might be too big to have good performance (May the tools help us 🙏);
- Big repository size;
- If something is broken we all suffer 😢.

# So about that tooling?

Monorepo tooling has been growing over the last years. You might have heard about:

- [Lerna](https://lerna.js.org/);
- [Yarn Workspaces](https://classic.yarnpkg.com/lang/en/docs/workspaces/);
- [Nx](https://nx.dev/);
- [Turborepo](https://turborepo.org/).

## The Turborepo Way 🚀

Turborepo was acquired by Vercel last year. Seems to be really easy to pick and set up.

Why turborepo:

- Fast builds;
- Caching (Has cloud caching with Vercel);
- Execute `yarn dev` in parallel (Changes on `@illuvium/design` will be instantly replicated on `Illuvidex`);
- Easily run commands for specific packages using turborepo's filtering;

# Questions?

AMA 😉

# Further Reading 👩🏽‍💻

- [Monorepos in JavaScript & Typescript](https://www.robinwieruch.de/javascript-monorepos/)

---

[(Back to top)](#a-take-on-monorepos)
