const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

console.log('Starting Market Sniper Pro server...');
console.log('Current directory:', __dirname);

// Serve static files from root directory
app.use(express.static(__dirname));

// Handle all routes - serve index.html
app.get('*', (req, res) => {
    console.log('Request received for:', req.url);
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
const server = app.listen(PORT, () => {
    console.log('\n🚀 Market Sniper Pro Server Running!\n');
    console.log(`📍 Local:   http://localhost:${PORT}\n`);
    console.log('Press Ctrl+C to stop\n');
});

// Keep alive
server.on('error', (err) => {
    console.error('Server error:', err);
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('SIGTERM signal received: closing HTTP server');
    server.close(() => {
        console.log('HTTP server closed');
    });
});