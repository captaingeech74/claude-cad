# CADVision — Free Colour Vision Screening

A modern website hosting the CAD Colour Vision Screener, developed by the Applied Vision Research Centre (AVOT) at City St George's, University of London.

## About

The CAD (Colour Assessment and Diagnosis) Colour Vision Screener is the gold-standard screening tool for detecting red-green and blue-yellow colour vision deficiencies. This website provides free public access to the screener along with educational content about colour vision.

## Features

- Educational content about colour vision deficiency
- Download portal for the CAD Colour Vision Screener (Windows)
- Experimental in-browser Windows emulation via Boxedwine (WebAssembly)
- Responsive, accessible, modern design
- Static site — no server required

## Tech Stack

- **Next.js 16** with App Router (static export)
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Boxedwine** (WebAssembly) for experimental in-browser Windows emulation

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Static output is generated in the `out/` directory, ready for deployment to Vercel, Netlify, or any static hosting.

## Deployment

Connect the GitHub repository to Vercel for automatic deployments. The site is configured for static export (`output: 'export'` in `next.config.ts`).

## Credits

- **CAD Test**: Professor John Barbur, Applied Vision Research Centre, City St George's, University of London
- **Boxedwine**: James Bryant — Wine/WebAssembly emulator
