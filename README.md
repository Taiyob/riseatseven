# Rise at Seven Clone

A premium, highly dynamic clone of the **Rise at Seven** agency website built with Vite, React, and Tailwind CSS.

## Features
- Responsive design with smooth animations powered by Framer Motion.
- Dark mode aesthetic with modern UI components.
- Ready for deployment on Netlify (static site generation).
- Optimized build output for fast load times.

## Development
```bash
npm install            # Install dependencies
npm run dev            # Start local dev server (http://localhost:5173)
npm run build          # Build for production (outputs to /dist)
```

## Deployment
The site is configured for **Netlify**:
- `netlify.toml` defines the build command (`npm run build`) and publish directory (`dist`).
- A GitHub Actions workflow (`.github/workflows/netlify.yml`) automatically builds and deploys on each push.

### Netlify CLI (optional)
If you prefer manual deployment:
```bash
npm install -g netlify-cli
netlify deploy --prod
```

## License
MIT © 2026
