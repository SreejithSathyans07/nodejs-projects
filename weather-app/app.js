const chalk = require('chalk')
const geoCode = require('./utils/geoCode')
const forecast = require('./utils/forecast')

// geoCode('kuzhupilly kerala', (error, response)=>{
//     console.log('Error', error)
//     console.log('data', response)
// })

// forecast(-5.7088, 44.1545, (error, response)=>{
//     console.log('Error', error)
//     console.log('data', response)
// })

const location = process.argv[2]
if (!location) {
    console.log('please provide a location')
}
else{
    geoCode(location, (error, response)=>{
        if (error) {
            return  console.log(error)
        }
        forecast(response.latitude,response.longitude, (error, forecast)=>{
            if (error) {
                return  console.log(error)
            }
            console.log(response)
            console.log(forecast);
        })
    })
}



