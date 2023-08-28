![journalme.me](/public/assets/Journal%20Docs%20Banner.png)

Project inspired by Scott Moss' [Build an AI Powered Fullstack App with Next.js, v3](https://frontendmasters.com/courses/fullstack-app-next-v3/) course on [Frontend Masters](https://frontendmasters.com/).

## Getting Started

> [Journalme.me](https://journalme.me/)

Do you want to have in your possession a journaling app that analyzes your mood day by day?

Journal Mood is a fullstack application in Next.js, storing data in a serverless Prisma DB on PlanetScale and integrated with the OpenAI API and Langchain, with auth using Clerk and testing with Vitest.

## Example Usage

Landing page for Journal Mood.

![journalme.me](/public/assets/landingpage.png)

A user putting in their journal entry for the day.

![journalme.me](/public/assets/journalpage.png)

A user viewing their journal entries history.

![journalme.me](/public/assets/historypage.png)

### Create a new Next.js Project

We recommend using Node version `18.x.x` and Next.js version `13.4.5`

```bash
npx create-next-app@13.4.5 <project-name>
npm run dev
```

### Install Clerk

Clerk is the third-party authentication provider for the application

```bash
npm i @clerk/nextjs
```

**Add Clerk secrets to .env.local**

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_XXXXXXXX
CLERK_SECRET_KEY=sk_test_XXXXXX
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/journal
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/new-user
```

### PlanetScale Serverless SQL Database

1. Create a [PlanetScale Database](https://planetscale.com/)
2. Install [pscale CLI](https://github.com/planetscale/cli#installation)
3. Use the CLI to connect to the DB: `pscale auth login`
4. Create a `dev` database branch: `pscale branch create mood dev`
5. Start the connection: `pscale connect mood dev --port 3309`

### Prisma ORM

1. Install Prisma Client: `npm i @prisma/client`
2. Install Prisma as dev dependency: `npm i prisma --save-dev`
3. Initialize Prisma: `npx prisma init`

### OpenAI API Account Setup

1. Create an [openai.com](https://openai.com/) account
2. Select the `API` App.
3. Create an [API Key](https://platform.openai.com/account/api-keys)
4. Copy/Paste the key into your into `.env.local` using the variable `OPENAI_API_KEY`
