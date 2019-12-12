const request = require('request')



const forecast = (latitude, longitude, callback) =>{
  const url = `https://api.darksky.net/forecast/${process.env.DARKSKY}/${longitude}, ${latitude}`
  
  request({ url: url, json: true }, (error, response) => {
  const data = response.body
    if (error){
      callback('Unable to connect to weather service!', undefined)
      } else if (response.body.error){
      callback('Unable to find location', undefined)
      } else {
      callback(undefined, `${data.daily.data[1].summary} It is currently ${data.currently.temperature} degrees out. There is a ${data.currently.precipProbability}% chance of rain.`)
    }
  })
}
module.exports = forecast