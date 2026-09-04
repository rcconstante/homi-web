# Homi Web

The public website for Homi, built with Next.js and exported as a static site.

## Local development

```bash
npm install
npm run dev
```

## Netlify deployment

1. Create a new Netlify site from this repository.
2. If this folder is part of a monorepo, set the base directory to `homiweb`.
3. Netlify reads `netlify.toml`, runs `npm run build`, and publishes `out`.
4. Set `NEXT_PUBLIC_SITE_URL` to the production URL before the first production build.
5. Enable Netlify Forms to receive submissions from the `homi-waitlist` form.

No Next.js server or Netlify adapter is required because every route is statically exported.
