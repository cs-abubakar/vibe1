# Deployment Instructions

## Vercel (Recommended)

1.  **Push to Git**: Ensure your project is pushed to a GitHub, GitLab, or Bitbucket repository.
2.  **Import Project**: Go to [Vercel Dashboard](https://vercel.com/dashboard) -> "Add New..." -> "Project".
3.  **Select Repository**: Choose your `vibe1` repository.
4.  **Deploy**: Vercel will automatically detect Next.js. Click **Deploy**.
    *   *No environment variables are required for this build.*

## Netlify

1.  **Push to Git**: Ensure your project is pushed to a Git provider.
2.  **New Site from Git**: Go to [Netlify](https://app.netlify.com/) -> "Add new site" -> "Import from an existing project".
3.  **Select Repository**: Choose your `vibe1` repository.
4.  **Build Settings**:
    *   **Build command**: `npm run build`
    *   **Publish directory**: Leave default (Netlify Next.js Runtime handles this).
5.  **Deploy**: Click **Deploy Site**.

## Manual/Local Production Build

To test the production build locally:

```bash
npm run build
npm start
```

Open `http://localhost:3000` to view the optimized production version.
