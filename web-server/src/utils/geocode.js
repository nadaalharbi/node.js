const request = require('request');

const weather = (address, callback) => {
    const weatherUrl = 'http://api.weatherstack.com/current?access_key=d34cdfa26acff26df282cacf321ddd1d&query=' + encodeURIComponent(address) + '&units=m';
    request({ url: weatherUrl, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to Weather service. Error: ', undefined);
        } else if (response.body.features.error) {
            callback('Unable to find the location.', undefined);
        } else {
            callback(undefined, `weather now in ${cityName} is ${response.body.current.weather_descriptions[0]}. It's currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out`);
        }
    });
}


const map = (address, callback) => {
    const mapUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibmFkYWkxaSIsImEiOiJja2MweWhzNDMxNjRkMnRuNG43Yzl4cHlkIn0._sgWLjIruedaHRtmteZpWg';
    request({ url: mapUrl, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services.', undefined);
        } else if (response.body.features.length === 0) {
            callback('Unable to find the location. Try another Search!', undefined);
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            });
        }
    });
}

module.exports = {
    map: map,
    weather: weather
} 
