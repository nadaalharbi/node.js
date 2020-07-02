const tutorial = require('./tutorial.js');
console.log(`Hello word from Node.js! , ${tutorial.sum(2, 2)}`);
console.log(tutorial.sum(1, 1));
console.log(tutorial.PI);
console.log(new tutorial.someObject());

var msg = 'Hello World';
console.log(msg.charAt(3));




//TODO test
const http = require('http');
const fs = require('fs');

const port = 3000; //
//const PUBLIC_PATH = __dirname + '/Nodejs';

const server = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/html' })// to check that everything is fine
    fs.readFile('index.html', (error, data) => {
        if (error) {
            response.writeHead(404);
            response.write('Error: File not found!');
        } else {
            response.write(data);
        }
        response.end();
    })
})


server.listen(port, (error) => {
    if (error) {
        console.log(`Server is NOT listening. Error: ${error}`);

    } else {
        console.log(`Server is listening on port ${port}`);
    }
});
    // // serving only the index page
    // if (request.url === '/' || request.url === '/index') {
    //     // reading HTML file asynchronously
    //     fs.readFile(PUBLIC_PATH + '/index.html', (error, data) => {
    //         if (error) {
    //             console.log('Error', error.message);

    //             response.statusCode = 404;
    //             response.end('Something went wrong');
    //             return;
    //         }

    //         response.statusCode = 200;
    //         // respond with index.html
    //         response.end(data);
    //         return;
    //     })
    // } else {
    //     // if user requested page other than index.html
    //     response.statusCode = 404;
    //     response.end('Page does not exist');
    // }



// server.listen(PORT, () => {
//     console.log(`Serving at localhost:${PORT}`);
// });