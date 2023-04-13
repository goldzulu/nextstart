# Nextstart

NextStart is an adaptation of the open source application called Taxonomy built using the new router, server components and everything new in Next.js 13.

> **Warning**
> This app is a work in progress. I'm building this in public. You can follow the progress on Twitter Original creator and maintainer [@shadcn](https://twitter.com/shadcn).
> Or follow me at [@voicetechguy1](https://twitter.com/voicetechguy1) for my own adaptation of the project

## Demo

![screenshot-2](https://user-images.githubusercontent.com/124599/198038921-2b16b18b-cb4d-44b1-bd1d-6419d4a8d92c.png)

## About this project

At the moment I am in need of good starter template I can use for my NextJS project and I've found Taxonomy to be a good starting point. It's an experiment to see how a modern app (with features like authentication, subscriptions, API routes, static pages for docs ...etc) would work in Next.js 13 and server components.

I'll be forking it off as of Apr 2023 into my own maintained version specifically it will be using Postgres instead of MySQL and I'll be adding some features that I need for my own projects.

Eventually it will be come a proper starter.

## Note on Performance

> **Warning**
> This app is using the canary releases for Next.js 13 and React 18. The new router and app dir is still in beta and not production-ready.
> NextAuth.js, which is used for authentication, is also not fully supported in Next.js 13 and RSC.
> **Expect some performance hits when testing the dashboard**.
> If you see something broken, you can ping me [@voicetechguy](https://twitter.com/voicetechguy1) or open up an issue.

## Features

- New `/app` dir,
- Routing, Layouts, Nested Layouts and Layout Groups
- Data Fetching, Caching and Mutation
- Loading UI
- Server and Client Components
- API Routes and Middlewares
- Authentication using **NextAuth.js**
- ORM using **Prisma**
- Database on **Supabase**
- UI Components built using **Radix UI**
- Documentation and blog using **MDX** and **Contentlayer**
- Subscriptions using **Stripe**
- Styled using **Tailwind CSS**
- Validations using **Zod**
- Written in **TypeScript**

## Todo
- [ ] Fix ESLINT tailwindcss/classnames-order errors


## Roadmap

- [x] ~Add MDX support for basic pages~
- [x] ~Build marketing pages~
- [x] ~Subscriptions using Stripe~
- [x] ~Responsive styles~
- [x] ~Add OG image for blog using @vercel/og~
- [ ] Add tests
- [ ] Dark mode

## Known Issues

A list of things not working right now:

1. ~GitHub authentication (use email)~
2. ~[Prisma: Error: ENOENT: no such file or directory, open '/var/task/.next/server/chunks/schema.prisma'](https://github.com/prisma/prisma/issues/16117)~
3. ~[Next.js 13: Client side navigation does not update head](https://github.com/vercel/next.js/issues/42414)~

## Running Locally

1. Install dependencies using pnpm:

```sh
pnpm install
```

2. Copy `.env.example` to `.env.local` and update the variables.

```sh
cp .env.example .env.local
```

3. Start the development server:

```sh
pnpm dev
```

## License

Originally created by [Shad](https://twitter.com/shadcn) at [https://github.com/shadcn/taxonomy](https://github.com/shadcn/taxonomy)

Currently licensed under the [MIT license](https://github.com/goldzulu/nextstart/blob/main/LICENSE.md).
