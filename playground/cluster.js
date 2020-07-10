const cluster = require('cluster');
const http = require('http');
const app = require('express')();
const os = require('os');
const port = process.env.PORT;


//using Cluster module with simple http server
if (cluster.isMaster) {
    const numOfCPUs = os.cpus().length;
    console.log(`Master cluster has ${numOfCPUs} number of CPUs.`);

    //forking one processes for each available core on the system.
    for (let i = 0; i < numOfCPUs; i++) {
        cluster.fork();
    }

    cluster.on('online', (worker) => {
        console.log(`Worker ${worker.process.pid} is online`);
    });

    //In case any process dies either accidentally or killed by the user
    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died with code: ${code}, and signal: ${signal}`);
        // a new process is forked
        console.log('Starting a new worker');
        cluster.fork();
    });
    
} else {
    app.server = http.createServer((req, res) => {
        const processIDMsg = `process ${process.pid} says hello!`;
        console.log(processIDMsg);
        res.end(processIDMsg);

        //applied to all routes 
        app.all('/*', (req, res) => {
            res.send(processIDMsg).end();
        });
    });
    app.server.listen(port);

}