const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res) => {
    console.log('hitting route');
    let key = process.env.WEATHER_API_KEY;
    let city = 55305;
    axios({
        method: 'GET',
        url: `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=3`
    }) .then((response) => {
        console.log(response);
        res.send(response.data)
    }) .catch((err) => {
        console.log("error in /weather:", err);
        res.sendStatus(500)
    })
})


module.exports = router;