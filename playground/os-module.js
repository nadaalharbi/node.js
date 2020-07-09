const os = require('os'); //core module
  
// Returns the cpu architecture 
console.log(`CPU architecture: ${os.arch()}`); 
console.log(`CPUs length ${os.cpus().length}`); 
  
// Returns the amount of free system memory in bytes 
console.log(`Free memory: ${os.freemem()}`); 
  
// Returns total amount of system memory in bytes
console.log(`Total memory: ${os.totalmem()}`); 
  
// Returns the list of network interfaces 
console.log(`List of network Interfaces: ${os.networkInterfaces()}`); 
  


// Returns the operating systems default directory for temp files. 
console.log(`OS default directory for temp files : ${os.tmpdir()}`); 

// Return the endianness of sytem 
console.log(`Endianness of system: ${os.endianness()}`); 
  
// Returns hostname of system 
console.log(`Hostname: ${os.hostname()}`); 
  
// Return operating system name 
console.log(`Operating system name: ${os.type()}`); 
  
// Returns the platform of os 
console.log('operating system platform: ' + os.platform()); 
  
// Returns the operating systems release. 
console.log(`OS release: ${os.release()}`); 
