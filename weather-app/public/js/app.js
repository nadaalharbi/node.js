console.log('Welcome back!');

// store the user input using document
const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');


messageOne.textContent = '';
messageTwo.textContent = '';

//create submit event 
weatherForm.addEventListener('submit', (event) => {
    event.preventDefault(); //prevent refreshing the browser

    const location = search.value;
    console.log(location);
    messageOne.textContent = 'Loading...';
    messageTwo.textContent = '';

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                console.log('Error occured. ' + data.error);
                messageOne.textContent = data.error;
            } else {
                messageOne.textContent = data.location;
                messageTwo.textContent = data.forecast;
                console.log(data.forecast);
                console.log(data.location);
                console.log(data.address);
            }
        });
    });
});