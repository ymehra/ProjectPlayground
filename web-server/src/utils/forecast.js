const request = require('request')

const forecast = (latitude, longitude, callback) => {
	url =
		'http://api.weatherstack.com/current?access_key=e7def0c7cd022c86d9a30188dc09eba4&query=' +
		latitude +
		',' +
		longitude +
		'&units=f'

	request({ url, json: true }, (error, { body }) => {
		if (error) {
			callback('Unable to connect to weather service', undefined)
		} else if (body.error) {
			callback('Unable to find location. Try another search.', undefined)
		} else {
			callback(
				undefined,
				(data = {
					temperature         : body.current.temperature,
					feelslike           : body.current.feelslike,
					weather_description : body.current.weather_descriptions[0]
				})
			)
		}
	})
}

module.exports = forecast
