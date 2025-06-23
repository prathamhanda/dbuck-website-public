# DBuck Website - Full Stack Application

This repository contains both the frontend (React + TypeScript + Vite) and backend (Node.js + Express + TypeScript) for the DBuck website.

## Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### 1. Install Dependencies

**Frontend:**
```bash
npm install
```

**Backend:**
```bash
cd backend
npm install
cd ..
```

### 2. Configure Backend
```bash
cd backend
cp .env.example .env
# Edit .env with your email configuration
cd ..
```

### 3. Start Development Servers

**Option 1: Start both servers separately**

Terminal 1 (Frontend):
```bash
npm run dev
```

Terminal 2 (Backend):
```bash
cd backend
npm run dev
```

**Option 2: Use the provided start script**
```bash
# On Windows PowerShell
.\start-dev.ps1

# On Windows Command Prompt / Git Bash
start-dev.bat
```

### 4. Access the Application
- **Frontend:** http://localhost:5173
- **Backend API:** http://localhost:5000
- **Health Check:** http://localhost:5000/api/health

## Project Structure

```
dbuck-website/
├── frontend files...           # React frontend
├── backend/                    # Express backend
│   ├── src/
│   ├── package.json
│   └── README.md
├── start-dev.ps1              # PowerShell start script
├── start-dev.bat              # Batch start script
└── README.md                  # This file
```

## Features

### Frontend
- ⚡ Vite + React + TypeScript
- 🎨 Tailwind CSS + shadcn/ui
- 📱 Responsive design
- 🎯 Contact form with validation
- 🔔 Toast notifications

### Backend
- 🚀 Express.js + TypeScript
- ✉️ Email service (Gmail/SMTP)
- 🔒 Security (CORS, Rate limiting)
- ✅ Input validation
- 📧 Professional email templates

## Contact Form Integration

The contact form on the website (`/` → Contact Section) now includes:

1. **Real-time Validation** - Client-side validation with error messages
2. **Form Submission** - Sends data to backend API
3. **Loading States** - Spinner while submitting
4. **Success Feedback** - Thank you message with auto-reset
5. **Error Handling** - User-friendly error messages
6. **Email Notifications** - Admin notification + user confirmation

## Backend API

See `backend/README.md` for detailed API documentation.

### Key Endpoints:
- `POST /api/contact` - Submit contact form
- `GET /api/health` - Health check

## Email Configuration

The backend requires email configuration to send contact form submissions:

1. **Gmail Setup** (Recommended):
   - Enable 2FA on Gmail account
   - Generate App Password
   - Use in `EMAIL_PASS` environment variable

2. **Other SMTP Providers**:
   - Update `EMAIL_HOST`, `EMAIL_PORT`, etc.
   - Adjust security settings as needed

## Development Workflow

1. **Make Changes** to frontend or backend
2. **Hot Reload** - Both servers support hot reloading
3. **Test Contact Form** - Verify email functionality
4. **Check Logs** - Monitor console for errors

## Production Deployment

### Frontend (Vite Build)
```bash
npm run build
# Deploy dist/ folder to static hosting
```

### Backend (Node.js)
```bash
cd backend
npm run build
npm start
# Deploy to Node.js hosting platform
```

## Troubleshooting

### Common Issues:

1. **Contact Form Not Working:**
   - Check if backend is running on port 5000
   - Verify CORS configuration
   - Check browser console for errors

2. **Emails Not Sending:**
   - Verify email credentials in .env
   - Check Gmail app password setup
   - Review backend logs for email errors

3. **Port Conflicts:**
   - Frontend: Change port in vite.config.ts
   - Backend: Change PORT in .env file

### Getting Help:

- Check console logs in both frontend and backend
- Verify environment variables are set correctly
- Test API endpoints directly with tools like Postman
- Review the detailed README files in each directory

## License

MIT License
