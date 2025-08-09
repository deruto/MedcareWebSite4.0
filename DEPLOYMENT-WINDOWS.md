# Windows Deployment Package for Medcare Dwarka Dental Website

## What's Included
This package contains a complete dental clinic website ready for Windows deployment.

## Quick Start (Easiest Method)
1. **Extract all files** to a folder (e.g., `C:\medcare-dental\`)
2. **Open Command Prompt as Administrator**
3. **Navigate to the folder:**
   ```cmd
   cd C:\medcare-dental
   ```
4. **Install dependencies:**
   ```cmd
   npm install
   ```
5. **Start the website:**
   ```cmd
   start-dev.bat
   ```
6. **Open browser:** Go to `http://localhost:5000`

## Files Overview
- `start-dev.bat` - Start development server (Windows Command Prompt)
- `start-prod.bat` - Start production server (Windows Command Prompt)  
- `start-dev.ps1` - Start development server (PowerShell)
- `start-prod.ps1` - Start production server (PowerShell)
- `README-Windows.md` - Detailed Windows setup instructions
- `package-windows.json` - Windows-compatible package configuration
- `dist/` - Pre-built production files
- `client/` - Website frontend code
- `server/` - Website backend code

## Alternative Methods

### Method 1: PowerShell (Recommended)
```powershell
# Navigate to project folder
cd C:\path\to\medcare-dental

# Install dependencies
npm install

# Start development server
.\start-dev.ps1
```

### Method 2: Manual Commands
```cmd
# Install dependencies
npm install

# For development
npx cross-env NODE_ENV=development tsx server/index.ts

# For production (first build, then start)
npm run build
npx cross-env NODE_ENV=production node dist/index.js
```

### Method 3: Using Windows Package.json
```cmd
# Replace the original package.json with Windows version
copy package-windows.json package.json

# Now npm run dev will work
npm install
npm run dev
```

## Website Features
✓ Professional dental clinic homepage
✓ Service pages with detailed information
✓ Team and doctor profiles
✓ Online booking system
✓ Contact forms
✓ Smile analysis with file upload
✓ Dental tourism information
✓ Mobile-responsive design
✓ Modern UI with Tailwind CSS

## System Requirements
- Windows 10/11
- Node.js 18+ 
- 4GB RAM minimum
- 1GB free disk space

## Support
- Check console output for any error messages
- Ensure port 5000 is available
- Run as Administrator if permission issues occur