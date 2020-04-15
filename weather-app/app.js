const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=e7def0c7cd022c86d9a30188dc09eba4&query=37.8267,-122.4233'

request({url: url}, (error, response) => {
   const data = JSON.parse(response.body)
   console.log(data.current) 
})