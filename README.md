# Hello World Full-Stack Application

A simple full-stack JavaScript application demonstrating basic client-server communication.

## Tech Stack

- **Backend**: Node.js with Express
- **Frontend**: React with Vite
- **Language**: JavaScript (ES Modules)

## Project Structure

```
hello-world-fullstack/
├── backend/          # Express API server
└── frontend/         # React application
```

## Getting Started

### Prerequisites

- Node.js >= 20.0.0
- npm

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

The backend server will start on http://localhost:3000

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will start on http://localhost:5173

## API Endpoints

### GET /api/message

Returns a greeting message with timestamp.

**Response:**
```json
{
  "message": "Hello from the backend!",
  "timestamp": "2025-12-05T12:00:00.000Z"
}
```

## Development Workflow

1. Start the backend server (Terminal 1):
   ```bash
   cd backend && npm run dev
   ```

2. Start the frontend dev server (Terminal 2):
   ```bash
   cd frontend && npm run dev
   ```

3. Open http://localhost:5173 in your browser

## Building for Production

### Backend

The backend runs directly from source:
```bash
cd backend
npm start
```

### Frontend

Build optimised production bundle:
```bash
cd frontend
npm run build
npm run preview
```

## Environment Variables

### Backend

Copy `.env.example` to `.env`:
```
PORT=3000
NODE_ENV=development
```

### Frontend

Copy `.env.example` to `.env`:
```
VITE_API_URL=http://localhost:3000
```

## Licence

MIT
