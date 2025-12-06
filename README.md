# Vibe1 - Educational Consultancy Platform

A full-stack Next.js application for Global Educational Consultants (GEC).

## Features

*   **Full-Stack**: Next.js App Router, Server Actions, Prisma ORM.
*   **Database**: SQLite (Development) / PostgreSQL (Production ready).
*   **Authentication**: NextAuth.js v5 (Admin Access).
*   **Admin Panel**: Manage Universities, Testimonials, Blogs, and Leads.
*   **Dynamic Frontend**: Homepage content is fetched from the database.
*   **Modern UI**: Tailwind CSS 4, Framer Motion animations.

## Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Setup Database**:
    ```bash
    # Generate Prisma Client
    npx prisma generate
    
    # Push Schema to SQLite DB
    npx prisma db push
    
    # Seed Database (Admin User & Initial Content)
    npx prisma db seed
    ```

3.  **Run Development Server**:
    ```bash
    npm run dev
    ```

4.  **Access Admin Panel**:
    *   Go to `http://localhost:3000/admin`
    *   **Email**: `admin@gecpathways.com`
    *   **Password**: `admin123`

## Deployment

See `DEPLOY.md` for instructions on deploying to Vercel or Netlify.
For production, you must switch the `DATABASE_URL` in `.env` to a PostgreSQL connection string (e.g., Supabase, Neon) and run `npx prisma migrate deploy`.

## Project Structure

*   `src/app`: Next.js App Router pages.
*   `src/components`: React components.
*   `src/lib`: Utilities and DB client.
*   `src/auth.ts`: NextAuth configuration.
*   `prisma/`: Database schema and seed script.