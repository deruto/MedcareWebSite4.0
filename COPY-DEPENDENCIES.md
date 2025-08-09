# Copy Dependencies from Replit to Windows

## The Issue
The `tsx` command is installed in the `node_modules` folder, but you need to copy this entire folder to your Windows system.

## Solution: Copy the Complete Project

### What You Need to Copy to Windows:
```
📁 Your Windows Project Folder/
├── 📁 node_modules/          ← COPY THIS ENTIRE FOLDER
├── 📁 client/               ← Website frontend
├── 📁 server/               ← Website backend  
├── 📁 shared/               ← Shared code
├── 📁 dist/                 ← Built files (if exists)
├── 📄 package.json          ← Dependencies list
├── 📄 package-lock.json     ← Exact versions
├── 📄 start-dev.bat         ← Windows startup script
├── 📄 start-prod.bat        ← Windows production script
├── 📄 tsconfig.json         ← TypeScript config
├── 📄 vite.config.ts        ← Build config
├── 📄 tailwind.config.ts    ← Styling config
└── 📄 README-Windows.md     ← Setup instructions
```

### Important Files to Include:
1. **node_modules/** - Contains all installed packages including `tsx`
2. **package-lock.json** - Ensures exact same package versions
3. **All config files** - TypeScript, Vite, Tailwind configurations

## Alternative: Use npm Global Install
If copying node_modules is too large, install tsx globally on Windows:

```cmd
npm install -g tsx
npm run dev
```

## Full Package Size
The complete project with dependencies is approximately:
- node_modules: ~200-300MB
- Project files: ~5-10MB
- Total: ~300MB

## Testing on Windows
After copying everything:
```cmd
cd your-project-folder
npm run dev
```

Should work immediately without needing `npm install`.