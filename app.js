const request = require('request')
require('dotenv').config()



const url = `https://api.darksky.net/forecast/${process.env.DARKSKY}/37.8267,-122.4233`

request({ url: url, json: true }, (error, response) => {
  const data = response.body
  if (error){
    console.log('Unable to connect to weather service!')
  }else if (response.body.error){
    console.log('Unable to find location')
  }else{
      console.log(`${data.daily.data[1].summary} It is currently ${data.currently.temperature} degrees out. There is a ${data.currently.precipProbability}% chance of rain.`)
  }
})

// const geourl = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${process.env.MAPBOX}` 

// request({ url: geourl, json: true }, (error, response) => {
//   const latitude = response.body.features[0].center[1]
//   const longitude = response.body.features[0].center[0]

//   console.log(latitude, longitude)
// })