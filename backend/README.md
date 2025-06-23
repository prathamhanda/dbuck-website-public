# DBuck Website Backend

A Node.js Express backend API for handling contact form submissions from the DBuck website.

## Features

- 🚀 **Express.js API** with TypeScript
- ✉️ **Email Service** with professional templates
- 🔒 **Security Features** (CORS, Rate Limiting, Helmet)
- ✅ **Input Validation** with Joi
- 📧 **Dual Email System** (Admin notification + User confirmation)
- 🎯 **Professional Email Templates** with DBuck branding
- ⚡ **Hot Reload** with tsx
- 🔧 **Environment Configuration**

## API Endpoints

### `POST /api/contact`
Submit contact form data

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com", 
  "message": "I'm interested in learning more about DBuck's accreditation solutions..."
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Thank you for your message! We'll get back to you soon.",
  "data": {
    "name": "John Doe",
    "email": "john@example.com",
    "timestamp": "2025-06-14T10:30:00.000Z"
  }
}
```

**Error Response (400/500):**
```json
{
  "success": false,
  "error": "Validation failed",
  "details": [
    {
      "field": "email",
      "message": "Please provide a valid email address"
    }
  ]
}
```

### `GET /api/health`
Health check endpoint

**Response (200):**
```json
{
  "status": "OK",
  "message": "DBuck Website API is running",
  "timestamp": "2025-06-14T10:30:00.000Z",
  "environment": "development"
}
```

## Setup Instructions

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Environment Configuration
Copy the example environment file and configure it:
```bash
cp .env.example .env
```

Update the `.env` file with your configuration:

```env
# Environment Configuration
NODE_ENV=development
PORT=5000

# Email Configuration (Gmail example)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_FROM=your-email@gmail.com

# Admin Configuration
ADMIN_EMAIL=admin@dbuck.com

# Frontend URL for CORS
FRONTEND_URL=http://localhost:5173

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=5
```

### 3. Email Setup (Gmail Example)

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password:**
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
   - Use this password in `EMAIL_PASS`

3. **Update Environment Variables:**
   ```env
   EMAIL_USER=your.email@gmail.com
   EMAIL_PASS=your-16-character-app-password
   EMAIL_FROM=your.email@gmail.com
   ADMIN_EMAIL=admin@dbuck.com
   ```

### 4. Run the Application

**Development Mode:**
```bash
npm run dev
```

**Production Mode:**
```bash
npm run build
npm start
```

## Project Structure

```
backend/
├── src/
│   ├── middleware/
│   │   └── errorHandler.ts      # Global error handling
│   ├── routes/
│   │   └── contact.ts           # Contact form endpoints
│   ├── services/
│   │   └── emailService.ts      # Email sending logic
│   ├── types/
│   │   └── index.ts             # TypeScript interfaces
│   └── server.ts                # Main server file
├── .env.example                 # Environment variables template
├── .gitignore                   # Git ignore rules
├── package.json                 # Dependencies and scripts
├── tsconfig.json               # TypeScript configuration
└── README.md                    # This file
```

## Email Templates

The backend includes two professional email templates:

### Admin Notification Email
- 🎯 DBuck branded header
- 📋 Formatted contact details
- 💬 Clean message display
- ⏰ Timestamp information

### User Confirmation Email
- ✨ Thank you message
- 📋 Message summary
- 🔗 Website link
- 📞 Contact information

## Security Features

- **CORS Protection** - Configured for frontend origin
- **Rate Limiting** - 5 requests per 15 minutes per IP
- **Helmet** - Security headers
- **Input Validation** - Joi schema validation
- **Error Handling** - Comprehensive error responses

## Validation Rules

- **Name:** 2-100 characters, required
- **Email:** Valid email format, required
- **Message:** 10-2000 characters, required

## Rate Limiting

- **Window:** 15 minutes (configurable)
- **Max Requests:** 5 per IP (configurable)
- **Headers:** Standard rate limit headers included

## Development

**Type Checking:**
```bash
npm run type-check
```

**Linting:**
```bash
npm run lint
```

**Build:**
```bash
npm run build
```

## Troubleshooting

### Common Issues

1. **Email Not Sending:**
   - Check Gmail app password
   - Verify EMAIL_* environment variables
   - Check firewall/network restrictions

2. **CORS Errors:**
   - Verify FRONTEND_URL matches your frontend URL
   - Check if both servers are running

3. **Rate Limiting:**
   - Adjust RATE_LIMIT_* variables if needed
   - Clear IP restrictions if testing

### Logs

The server provides detailed logging for:
- Email sending success/failure
- Validation errors
- Rate limiting hits
- General server errors

## Production Deployment

1. **Environment Variables:**
   - Set `NODE_ENV=production`
   - Use production email credentials
   - Set correct `FRONTEND_URL`

2. **Build and Start:**
   ```bash
   npm run build
   npm start
   ```

3. **Reverse Proxy:**
   - Consider using nginx or similar
   - Configure SSL/TLS certificates
   - Set up proper logging

## License

MIT License - see LICENSE file for details.
