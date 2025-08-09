// Production server for Windows without NODE_ENV dependency
console.log('Starting Medcare Dwarka Dental Website in production mode...');

// Set production mode directly in the process
process.env.NODE_ENV = 'production';

// Import and start the server from dist
import('../dist/index.js').then(() => {
    console.log('Production server started successfully!');
}).catch((error) => {
    console.error('Failed to start production server:', error);
    process.exit(1);
});