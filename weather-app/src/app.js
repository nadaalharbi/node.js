const path = require('path');// core module
const express = require('express');// installed module
const app = express();

const geocode = require('./utils/geocode');
const forecast = require('./utils/forcast');


const publicDirPath = path.join(__dirname, '../public');
// Setup handlerbars(hbs) engine and views
app.set('view engine', 'hbs');
// use(): is to customize the server 
app.use(express.static(publicDirPath));
/* get(): specifies what the server should do when someone send a request.
maybe send back a html or json.
It takes two args. The route and a function() that describe what we to send back
*/


// Setup Dynamic pages
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weathe App',
        name: 'Nada',
        year: 2020
    });
});

app.get('', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provie an Address.'
        });
    }

    geocode.map(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({ error });
        }
        forecast(latitude, longitude, (error, data) => {
            if (error) {
                return res.send({ error });
            }
            res.send({
                forecast: data,
                location,
                address: req.query.address
            });
        });
    });
});

app.get('/about-app', (req, res) => {
    res.render('about-app', {
        title: 'Node.js',
        name: 'Ryan Dahl',
        year: 2009
    });
});

app.get('/help-app', (req, res) => {
    res.render('help-app');
});

app.get('/products', (req, res) => {
    console.log(req.query.search + ',' + req.query.rating);
    res.send({
        products: []
    });
});

app.get('*', (req, res) => {
    res.send('404 page not found.');
});

//-----------------------------------------


// Setup Static pages
//1- Serve up HTML
app.get('/html', (req, res) => {
    res.send('<h1>Hellp <b>Express!</b></h1>'); //will be print in the browser
});
// 2- Serve up JSON Array of objects
app.get('/json', (req, res) => {
    res.send([{
        name: 'Nada',
        password: 123123
    },
    {
        name: 'Sarah',
        password: 111111
    }]);
});

app.get('/about', (req, res) => {
    res.send('This is About page.');
});


/* listen(): It takes two args. The port and a function() that to callback
*/
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is Up on port ${PORT}`);
});