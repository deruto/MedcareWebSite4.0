# Medcare Dwarka Dental Website - Windows Setup

## Prerequisites
- Node.js (version 18 or higher)
- npm (comes with Node.js)

## Installation Steps

1. **Download and extract the project files**
2. **Open Command Prompt or PowerShell as Administrator**
3. **Navigate to the project directory:**
   ```cmd
   cd path\to\your\project
   ```

4. **Install dependencies:**
   ```cmd
   npm install
   ```

## Running the Website

### Option 1: Using Batch Files (Command Prompt)
**Development Mode (recommended for testing):**
```cmd
start-dev.bat
```

**Production Mode (for deployment):**
```cmd
npm run build
start-prod.bat
```

### Option 2: Using PowerShell Scripts
**Development Mode:**
```powershell
.\start-dev.ps1
```

**Production Mode:**
```powershell
npm run build
.\start-prod.ps1
```

### Option 3: Manual Commands
**Development Mode:**
```cmd
npx cross-env NODE_ENV=development tsx server/index.ts
```

**Production Mode:**
```cmd
npm run build
npx cross-env NODE_ENV=production node dist/index.js
```

### Option 4: PowerShell Manual Commands
**Development Mode:**
```powershell
$env:NODE_ENV = "development"; npx tsx server/index.ts
```

**Production Mode:**
```powershell
npm run build
$env:NODE_ENV = "production"; node dist/index.js
```

## Accessing the Website
- Open your web browser
- Go to: `http://localhost:5000`
- The website will be available at this address

## Features
- Complete dental clinic website
- Booking forms and contact management
- Service pages with detailed information
- Team profiles and about page
- Smile analysis with file upload
- Dental tourism information
- Mobile-responsive design

## Troubleshooting

### If port 5000 is already in use:
1. Check what's using the port:
   ```cmd
   netstat -ano | findstr :5000
   ```
2. Kill the process if needed:
   ```cmd
   taskkill /PID <process_id> /F
   ```

### If you get permission errors:
- Run Command Prompt as Administrator
- Make sure Node.js is properly installed

### If npm install fails:
- Clear npm cache: `npm cache clean --force`
- Delete node_modules folder and package-lock.json
- Run `npm install` again

## Database Setup (Optional)
The website currently uses in-memory storage. To use a PostgreSQL database:
1. Install PostgreSQL
2. Set the DATABASE_URL environment variable
3. Run: `npm run db:push`

## Support
If you encounter any issues, check the console output for error messages.