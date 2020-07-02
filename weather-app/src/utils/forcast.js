const request = require('request');

const forcast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=d34cdfa26acff26df282cacf321ddd1d&query=' + latitude + ',' + longitude + '&units=m';
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to Weather service. Error: ', undefined);
        } else if (response.body.error) {
            callback('Unable to find the forecast.', undefined);
        } else {
            callback(undefined, `${response.body.current.weather_descriptions[0]} , It's currently ${response.body.current.temperature} degrees out. There's a  ${response.body.current.precip} % chance of rain.`);
        }
    });
}

module.exports = forcast;