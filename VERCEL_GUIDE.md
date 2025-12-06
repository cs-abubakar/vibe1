# Vercel Deployment Instructions

Since you are not a coder, follow these exact steps to deploy your website to Vercel. The process is automated, so you don't need to touch the code again.

## Step 1: Push Code to GitHub
(The AI agent has already done this for you. Your code is on the `claude/redesign-app-layout...` branch).

## Step 2: Setup Vercel
1.  Go to [vercel.com](https://vercel.com) and Sign Up / Log In.
2.  On your dashboard, click **"Add New..."** -> **"Project"**.
3.  Select **"Import from GitHub"**.
4.  Find your repository `vibe1` (or whatever you named it) and click **"Import"**.

## Step 3: Configure Project
Vercel will detect that this is a Next.js project. You need to configure the **Database**.

Since you want a real database (PostgreSQL) for production (so your data doesn't disappear):
1.  Go to the **Storage** tab in your Vercel Project Dashboard (after the initial failed deploy, or set it up during creation if offered).
2.  Click **"Create Database"** -> Select **"Postgres"**.
3.  Accept the terms and create.
4.  Vercel will automatically add the environment variables (`POSTGRES_URL`, etc.) to your project.

## Step 4: Connect Database
1.  Go to **Settings** -> **Environment Variables** on Vercel.
2.  You need to add two variables manually if they aren't there:
    *   `DATABASE_URL`: Copy the value from `POSTGRES_PRISMA_URL` (which Vercel Postgres created) and paste it here.
    *   `AUTH_SECRET`: Generate a random string (e.g. type generic gibberish) and paste it here. This secures your login.

## Step 5: Redeploy
1.  Go to the **Deployments** tab.
2.  Click the three dots on the latest failed deployment -> **"Redeploy"**.
3.  Vercel will run the build command.

**IMPORTANT:** Vercel Postgres is a different database than the one we used for development (SQLite). It will start empty.
To fix this, you need to run a command *once* to set up the tables.
Since you are not using a terminal, the easiest way is to use the **Vercel Build Command Override** temporarily, OR just rely on the automatic migrations if configured (we haven't configured auto-migrate on build for safety).

**Recommended Non-Technical Path:**
1.  After deployment succeeds (the site loads but might error on data), go to your local computer terminal where this agent is running.
2.  We will run a command to push your local structure to Vercel's database.
    *   *Agent Note: I will provide this command in the chat once you confirm you have created the Vercel Project.*

## Step 6: Admin Access
Once deployed:
1.  Go to `https://your-project-name.vercel.app/login`.
2.  You won't have an admin user yet because the live database is empty.
3.  We need to run the seed script on production.

**We can automate this via the "Build Command" in Vercel:**
1.  Go to **Settings** -> **General** -> **Build & Development Settings**.
2.  Change **Build Command** to: `npx prisma generate && npx prisma db push && npx prisma db seed && next build`
3.  Redeploy.
4.  This will create the database tables AND create the Admin user (`admin@gecpathways.com` / `admin123`) every time you deploy.
5.  **After the first successful deploy**, you should change the Build Command back to just `next build` so it doesn't reset your data every time.

## Summary Checklist
- [ ] Import Project in Vercel.
- [ ] Add Vercel Postgres (Storage).
- [ ] Set Environment Variables (`DATABASE_URL`, `AUTH_SECRET`).
- [ ] Update Build Command to include seeding (temporarily).
- [ ] Deploy.
- [ ] Login to Admin Panel.
