# How to Fix package.json for Windows NODE_ENV Issue

## The Problem
The current package.json uses Unix-style environment variable syntax that doesn't work on Windows:
```json
"dev": "NODE_ENV=development tsx server/index.ts"
```

## The Solution
Replace the scripts section in your package.json with these Windows-compatible commands:

### Current Scripts (BROKEN on Windows):
```json
"scripts": {
  "dev": "NODE_ENV=development tsx server/index.ts",
  "build": "vite build && esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist",
  "start": "NODE_ENV=production node dist/index.js",
  "check": "tsc",
  "db:push": "drizzle-kit push"
}
```

### Fixed Scripts (WORKS on Windows):
```json
"scripts": {
  "dev": "cross-env NODE_ENV=development tsx server/index.ts",
  "build": "vite build && esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist",
  "start": "cross-env NODE_ENV=production node dist/index.js",
  "check": "tsc",
  "db:push": "drizzle-kit push"
}
```

## Step-by-Step Instructions

1. **Open package.json in a text editor**
2. **Find the "scripts" section (around line 6-12)**
3. **Replace these two lines:**
   - Change: `"dev": "NODE_ENV=development tsx server/index.ts"`
   - To: `"dev": "cross-env NODE_ENV=development tsx server/index.ts"`
   
   - Change: `"start": "NODE_ENV=production node dist/index.js"`
   - To: `"start": "cross-env NODE_ENV=production node dist/index.js"`

4. **Save the file**
5. **Now you can use:** `npm run dev` on Windows!

## Alternative: Use the Windows Package File
Instead of editing manually, you can replace your package.json with the Windows-ready version:

```cmd
copy package-windows.json package.json
npm install
npm run dev
```

## What cross-env Does
- Makes environment variables work on both Windows and Unix systems
- Automatically translates `NODE_ENV=development` to Windows-compatible format
- Already installed in your project dependencies

## Verification
After making the change, test it:
```cmd
npm run dev
```
You should see: "express serving on port 5000" without any NODE_ENV errors.