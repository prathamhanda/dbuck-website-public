# Script to prepare the repository for public sharing
# This removes sensitive files and pushes to the public repository

# Navigate to project root
cd $PSScriptRoot

# Make sure we're in the right directory
Write-Host "Preparing repository for public sharing..."
Write-Host "Current directory: $((Get-Location).Path)"

# Stage all files
git add .

# Create a temporary branch for public repo
$branchName = "public-release-$(Get-Date -Format 'yyyyMMdd-HHmmss')"
Write-Host "Creating temporary branch: $branchName"
git checkout -b $branchName

# Remove sensitive files and unnecessary directories/files
Write-Host "Removing sensitive files and cleaning up unnecessary files..."

# Remove sensitive environment files
if (Test-Path "backend/.env") {
    git rm --cached backend/.env
    Write-Host "Removed backend/.env from git tracking"
}

# Check for and remove any debug logs
$logFiles = Get-ChildItem -Path . -Filter "*.log" -Recurse -File
if ($logFiles) {
    $logFiles | ForEach-Object {
        git rm --cached $_.FullName
        Write-Host "Removed log file: $($_.Name)"
    }
}

# Check for any .qodo directories (seems to be a tool-specific directory)
if (Test-Path ".qodo") {
    git rm --cached -r .qodo
    Write-Host "Removed .qodo directory from git tracking"
}

# Check for any .DS_Store files
$dsStoreFiles = Get-ChildItem -Path . -Filter ".DS_Store" -Recurse -File -Force
if ($dsStoreFiles) {
    $dsStoreFiles | ForEach-Object {
        git rm --cached $_.FullName
        Write-Host "Removed Mac specific file: $($_.Name)"
    }
}

# Make sure node_modules are properly ignored
if (!(Select-String -Path ".gitignore" -Pattern "node_modules")) {
    Add-Content -Path ".gitignore" -Value "node_modules/"
    Write-Host "Added node_modules to .gitignore"
}

# Check for large binary files (over 10MB)
Write-Host "Checking for large binary files..."
$largeFiles = Get-ChildItem -Path . -Recurse -File | Where-Object { $_.Length -gt 10MB -and $_.FullName -notlike "*node_modules*" -and $_.FullName -notlike "*\.git*" }
if ($largeFiles) {
    Write-Host "Warning: Large files found that might not be suitable for GitHub:" -ForegroundColor Yellow
    $largeFiles | ForEach-Object {
        $sizeMB = [math]::Round($_.Length / 1MB, 2)
        Write-Host "  $($_.FullName) - $sizeMB MB" -ForegroundColor Yellow
        git rm --cached $_.FullName
        Write-Host "  Removed from git tracking" -ForegroundColor Yellow
    }
    
    # Add these large files to .gitignore
    $largeFiles | ForEach-Object {
        $relativePath = $_.FullName.Replace((Get-Location).Path + "\", "")
        Add-Content -Path ".gitignore" -Value $relativePath
    }
    Write-Host "Added large files to .gitignore" -ForegroundColor Green
}

# Add .env files to .gitignore if not already there
$rootGitignore = Get-Content ".gitignore" -Raw
if (-not ($rootGitignore -match "\.env")) {
    Write-Host "Adding .env files to root .gitignore"
    Add-Content ".gitignore" "`n# Environment files`n.env`n.env.*`n!.env.example`n"
}

# Update README.md for public repository
Write-Host "Updating README.md for public repository..."
if (Test-Path "README.md") {
    # Add a notice that this is a public version of a private repository
    $readmeContent = Get-Content -Path "README.md" -Raw
    
    if (-not ($readmeContent -match "This is a public version")) {
        $publicNotice = @"
# DBuck Website - Public Repository

> **Note:** This is a public version of a private repository. Some functionality may be limited or require configuration.

"@
        $newReadmeContent = $publicNotice + $readmeContent
        Set-Content -Path "README.md" -Value $newReadmeContent
        Write-Host "Added public repository notice to README.md"
    }
}

# Commit the changes
git commit -m "Prepare for public repository: Remove sensitive files and update documentation"

# Summary of changes
Write-Host "`nSummary of changes before pushing to public repository:" -ForegroundColor Cyan
Write-Host "- Removed sensitive environment files" -ForegroundColor Cyan
Write-Host "- Removed unnecessary files and directories" -ForegroundColor Cyan
Write-Host "- Updated README.md for public repository" -ForegroundColor Cyan
Write-Host "- Updated .gitignore to exclude sensitive and large files" -ForegroundColor Cyan

# Confirm push
$confirmation = Read-Host -Prompt "`nReady to push to public repository. Continue? (y/n)"
if ($confirmation -ne 'y') {
    Write-Host "Operation cancelled by user" -ForegroundColor Red
    exit
}

# Push to public repository
Write-Host "`nPushing to public repository..." -ForegroundColor Green
git push -u public $branchName:main --force

Write-Host "Done! Repository prepared and pushed to public remote."
Write-Host "Public repository URL: https://github.com/prathamhanda/dbuck-website-public.git"

# Return to original branch
git checkout main
