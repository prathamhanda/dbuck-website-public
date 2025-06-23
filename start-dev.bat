@echo off
echo 🚀 Starting DBuck Website - Full Stack Development Servers
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js is not installed or not in PATH
    pause
    exit /b 1
)

echo ✅ Node.js found

REM Check if backend dependencies are installed
if not exist "backend\node_modules" (
    echo 📦 Installing backend dependencies...
    cd backend
    call npm install
    cd ..
)

REM Check if frontend dependencies are installed  
if not exist "node_modules" (
    echo 📦 Installing frontend dependencies...
    call npm install
)

REM Check if backend .env exists
if not exist "backend\.env" (
    echo ⚠️  Backend .env file not found. Creating from template...
    copy "backend\.env.example" "backend\.env" >nul
    echo 🔧 Please edit backend\.env with your email configuration
)

echo.
echo 🎯 Starting servers...
echo 📊 Frontend: http://localhost:5173
echo 🌐 Backend: http://localhost:5000  
echo 🏥 Health Check: http://localhost:5000/api/health
echo.
echo Press Ctrl+C to stop all servers
echo.

REM Start backend
start "DBuck Backend" cmd /k "cd backend && npm run dev"

REM Wait a moment for backend to start
timeout /t 3 /nobreak >nul

REM Start frontend
start "DBuck Frontend" cmd /k "npm run dev"

echo ✅ Servers started in separate windows!
echo.
echo To stop servers:
echo 1. Close the terminal windows, or
echo 2. Press Ctrl+C in each terminal
echo.
pause
