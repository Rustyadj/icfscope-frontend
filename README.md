# ICFScope Frontend

Next.js frontend for ICFScope - AI-powered ICF construction takeoff tool.

## Features

- **Authentication** - Login/register system with JWT
- **Projects Dashboard** - Create and manage ICF projects
- **Plan Upload** - Upload PDF plans with S3 integration
- **Takeoff Management** - AI-powered wall detection and material calculations
- **Dark Theme** - Tailwind CSS with dark blue theme
- **Responsive Design** - Works on desktop and mobile

## Tech Stack

- Next.js 13.4
- React 18.2
- Tailwind CSS
- Framer Motion
- Three.js for 3D visualization
- Axios for API calls
- Headless UI components

## Environment Variables

Create a `.env.local` file:

```
NEXT_PUBLIC_API_URL=https://your-backend-url.onrender.com/api
```

## Development

```bash
npm install
npm run dev
```

## Deployment

This app is configured for Vercel deployment:

1. Push to GitHub
2. Connect to Vercel
3. Set environment variable: `NEXT_PUBLIC_API_URL`
4. Deploy

## API Integration

The frontend communicates with the ICFScope backend API for:
- User authentication
- Project management
- PDF upload and processing
- Takeoff calculations
- Manufacturer data

