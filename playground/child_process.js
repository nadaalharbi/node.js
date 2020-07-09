const { spawn, exec, fork } = require('child_process');
const { stdout } = require('process');

//SPAWN()
const bash = spawn('bash');
// register a handler to listen to write event on the child
bash.stdout.on('data', (data) => {
    console.log('stdout: ' + data);
});
// register a listener for exit event 
bash.on('exit', (code, signal) => {
    console.log(`child process exited with code ${code} and signal ${signal}`);
});
setTimeout(() => {
    console.log('Sending stdin to terminal');
    bash.stdin.write('echo "Hello $USER. Your machine runs since:" \n');
    bash.stdin.write('uptime \n');
    console.log('Ending terminal session');
    bash.stdin.end();
}, 2000);



// FORK()
// Send a communication message from child and parent process 
const forked = fork(__dirname+'/parent.js');
forked.on('message', message => {
    console.log('message from child:', message);
    forked.send('Hi');
});



//EXEC()
// use exec() with command find to return ONLY the number of lines, word on this wc: working directy.
exec('find . -type f | wc -l -w', (error, stdout, stderr) => {
    if (error) {
        console.error(`Execption error: ${error}`);
        return;
    }
    if (stderr) {
        console.error(`Error: ${stderr}`);
        return;
    }
    console.log(`Number of lines and words: ${stdout}`);
});

//use exec() with command ls -a to list the hidden files in this working dir.
exec('ls -f', (error, stdout, stderr)=>{
    if (error){
        return console.log(error);
    }
    console.log(`All files in this working directory including the hidden ones: \n ${stdout}`);
});
