//Parent file 

if (process.send) {
  process.send("Hello");
}

process.on('message', message => {
  console.log('message from parent:', message);
  process.exit(0);
});