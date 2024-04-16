const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Check the URL of the request
    if (req.url === '/api/pdf' && req.method === 'GET') {
        // Set the response header
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        // Send back the response:
        res.end('Hello from node.js');
    } else {
        // Handle other paths or methods by sending a 404 response
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

// Server listens on port 3000
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
