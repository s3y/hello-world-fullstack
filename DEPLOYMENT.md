# Deployment Guide

This guide covers deploying the Hello World Full-Stack application to various platforms.

## Docker Deployment

### Building the Docker Image

```bash
docker build -t hello-world-fullstack .
```

### Running Locally with Docker

```bash
docker run -p 3000:3000 hello-world-fullstack
```

Visit http://localhost:3000 to see your application.

## Platform Deployment

### Railway / Render / Similar Platforms

#### Using Dockerfile (Recommended)

1. **Build Type**: Select "Dockerfile"
2. **Docker File**: Leave as default (it will find `./Dockerfile`)
3. **Docker Context Path**: Leave as `.` (root directory)
4. **Docker Build Stage**: Leave empty (uses default final stage)

The Dockerfile automatically:
- Builds the React frontend
- Installs backend dependencies
- Serves both API and static frontend from port 3000

#### Environment Variables

Set these in your platform's dashboard:

```
NODE_ENV=production
PORT=3000
```

#### Port Configuration

- **Port**: 3000
- The application serves both API and frontend on the same port

### Vercel / Netlify (Alternative - Frontend Only)

If you want to deploy frontend and backend separately:

**Frontend (Vercel/Netlify):**
1. Deploy from `frontend/` directory
2. Build command: `npm run build`
3. Output directory: `dist`
4. Set environment variable: `VITE_API_URL=<your-backend-url>`

**Backend (Railway/Render):**
1. Deploy from `backend/` directory
2. Start command: `npm start`
3. Set `PORT` environment variable

## Testing the Deployment

Once deployed, test the API endpoint:

```bash
curl https://your-app-url.com/api/message
```

Expected response:
```json
{
  "message": "Hello from the backend!",
  "timestamp": "2025-12-05T12:00:00.000Z"
}
```

## Troubleshooting

### Port Issues

Ensure your platform is configured to use port 3000, or set the `PORT` environment variable.

### Build Failures

If the Docker build fails:
1. Check that both `frontend/package.json` and `backend/package.json` exist
2. Ensure npm dependencies are correctly specified
3. Review build logs for specific errors

### Static Files Not Loading

If the frontend doesn't load:
1. Verify `NODE_ENV=production` is set
2. Check that the frontend build completed successfully
3. Ensure the backend is serving static files from `/public`

## Architecture

In production:
- Frontend is built into static files
- Backend Express server serves both:
  - API endpoints at `/api/*`
  - Static frontend files at all other routes
- Single port (3000) handles all traffic
- CORS is enabled for development compatibility
