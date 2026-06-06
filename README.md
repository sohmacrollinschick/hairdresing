# Aurora Luxe Hair Salon

Premium Hair Dressing and Beauty Salon web application built with React, Tailwind CSS, Node.js, Express, and Supabase.

## Architecture

- `frontend`: Vite React app with Tailwind CSS, React Router DOM, Context API, React Hook Form, Axios, and Supabase Auth.
- `backend`: Express API with Supabase PostgreSQL access, Supabase Auth token verification, admin middleware, and starter storage service.
- `backend/src/config/schema.sql`: Supabase table schema for users, stylists, services, appointments, gallery images, and gallery videos.

## Main Features

- Home page with hero, featured hairstyles, stylists, testimonials, CTA, gallery preview, and services preview.
- About, Services, Gallery, Book Appointment, Contact, Login, Register, and Not Found pages.
- Separate protected admin dashboard layout for appointments, services, stylists, gallery, video, users, and settings management.
- API endpoints for auth, appointments, services, stylists, and gallery.
- Environment-based configuration for frontend, backend, and Supabase keys.

## Local Setup

Install dependencies separately:

```bash
cd frontend
npm install
npm run dev
```

```bash
cd backend
npm install
npm run dev
```

Frontend runs on `http://localhost:5173`.
Backend runs on `http://localhost:5000`.

## Environment Variables

Frontend:

```bash
VITE_API_URL=http://localhost:5000/api
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Backend:

```bash
PORT=5000
CLIENT_URL=http://localhost:5173
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

## API Endpoints

Auth:

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/profile`

Appointments:

- `POST /api/appointments`
- `GET /api/appointments`
- `PUT /api/appointments/:id`
- `DELETE /api/appointments/:id`

Services:

- `GET /api/services`
- `POST /api/services`
- `PUT /api/services/:id`
- `DELETE /api/services/:id`

Stylists:

- `GET /api/stylists`
- `POST /api/stylists`
- `PUT /api/stylists/:id`
- `DELETE /api/stylists/:id`

Gallery:

- `GET /api/gallery`
- `POST /api/gallery/image`
- `POST /api/gallery/video`
- `DELETE /api/gallery/:id`

## Deployment

- Deploy `frontend` to Vercel. Use `frontend/vercel.json` and set the Vite environment variables in Vercel.
- Deploy `backend` to Render. Use `backend/render.yaml` or create a Render Web Service with `npm install` as build command and `npm start` as start command.
- Do not commit real Supabase secrets. Replace placeholder `.env` values locally and configure production secrets in Vercel and Render dashboards.
