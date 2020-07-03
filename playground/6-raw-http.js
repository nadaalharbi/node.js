const http = require('http')
const port = process.env.PORT || 3000;

// Creates an Http GET request to static url, to GET the text then print it in terminal
const options = {
    hostname: 'webcode.me',
    port: 80,
    path: '/',
    method: 'GET'
};

const request = http.get(options, (res) => {
    console.log(`statusCode: ${res.statusCode}`);
    res.on('data', (data) => {
        process.stdout.write(data);
    });
});

request.on('error', (error) => {
    console.error(error);
});

request.end();

//-------------------------------------

// Create server to print the current date as JSON response
const server = http.createServer((req, res) => {
    if (req.url == '/date') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ now: new Date() }));
        res.end();
    } else {
        // if wrong url 
        res.end('Invalid request');
    }
}).listen(port)
//server.listen(port);

console.log(`Server running on http://localhost:${port}/date`);



