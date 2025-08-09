# Windows Setup - Step by Step

## Prerequisites
- Node.js installed (download from https://nodejs.org)
- Project files extracted to a folder

## Setup Steps (In Order)

### Step 1: Install Dependencies
```cmd
npm install
```
This installs all required packages including `tsx`, `vite`, `express`, and others.

### Step 2: Fix package.json for Windows (Optional but Recommended)
```cmd
copy package-windows-simple.json package.json
```

### Step 3: Start the Website
```cmd
npm run dev
```

### Alternative: Use Batch File
```cmd
start-dev.bat
```

## What npm install Does
- Downloads and installs all dependencies from package.json
- Installs `tsx` (TypeScript execution tool)
- Installs `vite` (frontend build tool)
- Installs `express` (web server)
- Creates `node_modules` folder with all packages

## Expected Output After npm install
```
added 483 packages, and audited 484 packages in 15s
64 packages are looking for funding
```

## Expected Output After npm run dev
```
[express] serving on port 5000
```

## If npm install Fails
1. **Clear cache:** `npm cache clean --force`
2. **Delete node_modules:** Remove the folder if it exists
3. **Try again:** `npm install`
4. **Check Node.js version:** `node --version` (should be 18+)

## Summary
Always run `npm install` first - it's required to install the `tsx` command and all other dependencies needed to run the website!