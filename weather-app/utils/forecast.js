const request = require('request')

const forecast = (latitude, longitude, callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=ae73fb5d60667ecbdb55580f5290c124&query='+longitude+','+latitude

    request({url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to the server', undefined)
        }else if(response.body.error){
            callback('Not found on planet earth!',undefined)
        }else{
            callback(undefined,'It is curently '+response.body.current.temperature +' degrees out. It feels like '+response.body.current.feelslike+' degrees out')
        }
    })
}

module.exports = forecast