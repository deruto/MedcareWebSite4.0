// Development server for Windows without NODE_ENV dependency
import { spawn } from 'child_process';
import path from 'path';

console.log('Starting Medcare Dwarka Dental Website in development mode...');

// Set development mode directly in the process
process.env.NODE_ENV = 'development';

// Import and start the server
import('./index.js').then(() => {
    console.log('Development server started successfully!');
}).catch((error) => {
    console.error('Failed to start development server:', error);
    process.exit(1);
});