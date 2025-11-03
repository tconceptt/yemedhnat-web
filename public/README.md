# Public Assets

This folder contains static assets that are served at the root URL of your Next.js application.

## Structure

Place your static files here:

- **Favicon**: `favicon.ico` or `favicon.png`
- **Logo**: `logo.png`, `logo.svg`, etc.
- **Images**: Local images that should be accessible via `/image-name.png`
- **Files**: PDFs, documents, etc.
- **Robots.txt**: `robots.txt` for SEO
- **Manifest**: `manifest.json` for PWA features

## Examples

- `public/favicon.ico` → accessible at `/favicon.ico`
- `public/logo.png` → accessible at `/logo.png`
- `public/documents/brochure.pdf` → accessible at `/documents/brochure.pdf`

## Current Usage

Currently, the site uses:
- External images from Unsplash (configured in `next.config.js`)
- Icons from `lucide-react` npm package
- Google Fonts loaded via link tags

You can add local assets here as needed.

