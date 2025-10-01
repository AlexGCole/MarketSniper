const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

console.log('Starting server...');
console.log('Current directory:', __dirname);
console.log('Public folder path:', path.join(__dirname, 'public'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Root route
app.get('*', (req, res) => {
  console.log('Request received for:', req.url);
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
const server = app.listen(PORT, () => {
  console.log('\n🚀 Market Sniper Pro Server Running!\n');
  console.log(`📍 Local: http://localhost:${PORT}\n`);
  console.log('Press Ctrl+C to stop\n');
});

// Keep alive
server.on('error', (err) => {
  console.error('Server error:', err);
});