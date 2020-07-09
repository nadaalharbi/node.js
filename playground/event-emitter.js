const EventEmitter = require('events');

// Initializing instance of EventEmitter Class
const eventEmitter = new EventEmitter();

const messageOne = (msg) => {
    console.log(`The first message (1) ${msg}`);
};

const messageTwo = (msg) => {
    console.log(`The second message (2) ${msg}`);
};

// Registering messageOne and messageTwo 
eventEmitter.on('myEvent', messageOne);
eventEmitter.on('myEvent', messageOne);
eventEmitter.on('myEvent', messageTwo);

// Removing one instance of messageOne that was registered 
eventEmitter.removeListener('myEvent', messageOne);

// Triggering myEvent (raising an event)
eventEmitter.emit('myEvent', "Event occurred");

// Removing all the listeners to myEvent 
eventEmitter.removeAllListeners('myEvent');

// Triggering myEvent 
eventEmitter.emit('myEvent', "Event occurred"); 