# PowerShell script to start both frontend and backend
Write-Host "🚀 Starting DBuck Website - Full Stack Development Servers" -ForegroundColor Green
Write-Host ""

# Check if Node.js is installed
try {
    $nodeVersion = node --version
    Write-Host "✅ Node.js version: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js is not installed or not in PATH" -ForegroundColor Red
    exit 1
}

# Check if backend dependencies are installed
if (!(Test-Path "backend/node_modules")) {
    Write-Host "📦 Installing backend dependencies..." -ForegroundColor Yellow
    Set-Location backend
    npm install
    Set-Location ..
}

# Check if frontend dependencies are installed
if (!(Test-Path "node_modules")) {
    Write-Host "📦 Installing frontend dependencies..." -ForegroundColor Yellow
    npm install
}

# Check if backend .env exists
if (!(Test-Path "backend/.env")) {
    Write-Host "⚠️  Backend .env file not found. Creating from template..." -ForegroundColor Yellow
    Copy-Item "backend/.env.example" "backend/.env"
    Write-Host "🔧 Please edit backend/.env with your email configuration" -ForegroundColor Cyan
}

Write-Host ""
Write-Host "🎯 Starting servers..." -ForegroundColor Green
Write-Host "📊 Frontend: http://localhost:5173" -ForegroundColor Cyan
Write-Host "🌐 Backend: http://localhost:5000" -ForegroundColor Cyan
Write-Host "🏥 Health Check: http://localhost:5000/api/health" -ForegroundColor Cyan
Write-Host ""
Write-Host "Press Ctrl+C to stop all servers" -ForegroundColor Yellow
Write-Host ""

# Start backend in background
$backendJob = Start-Job -ScriptBlock {
    Set-Location $using:PWD
    Set-Location backend
    npm run dev
}

# Start frontend in background  
$frontendJob = Start-Job -ScriptBlock {
    Set-Location $using:PWD
    npm run dev
}

# Wait for user to stop
try {
    Write-Host "✅ Servers started! Waiting for Ctrl+C..." -ForegroundColor Green
    while ($true) {
        Start-Sleep -Seconds 1
        
        # Check if jobs are still running
        if ($backendJob.State -eq "Completed" -or $backendJob.State -eq "Failed") {
            Write-Host "❌ Backend server stopped unexpectedly" -ForegroundColor Red
            break
        }
        if ($frontendJob.State -eq "Completed" -or $frontendJob.State -eq "Failed") {
            Write-Host "❌ Frontend server stopped unexpectedly" -ForegroundColor Red
            break
        }
    }
} finally {
    Write-Host ""
    Write-Host "🛑 Stopping servers..." -ForegroundColor Yellow
    Stop-Job $backendJob -ErrorAction SilentlyContinue
    Stop-Job $frontendJob -ErrorAction SilentlyContinue
    Remove-Job $backendJob -ErrorAction SilentlyContinue
    Remove-Job $frontendJob -ErrorAction SilentlyContinue
    Write-Host "✅ All servers stopped" -ForegroundColor Green
}
