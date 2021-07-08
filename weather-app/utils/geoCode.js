const request = require('request')

const geoCode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1Ijoic3JlZWppdGgwMDciLCJhIjoiY2txZjk1NTVoMW5vZzJ1b3Y2d3Q3ZGZjeSJ9.TynWse9Nyi8lARBvLszzjw'
    request({url: url, json: true}, (error, response)=>{
        if (error) {
            callback('Unable to connect to the server', undefined)
        }else if(response.body.features.length === 0){
            callback('Not found on planet earth!',undefined)
        }else{
            let data = {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            }
            callback('',data )
        }
    })
}

module.exports = geoCode