const express = require('express');
const router = express.Router();
const axios = require('axios');

// GET forecast for a given location
router.get('/:location', (req, res) => {
    let key = process.env.WEATHER_API_KEY;
    let city = req.params.location;
    axios({
        method: 'GET',
        url: `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=4`
    }) .then((response) => {
        res.send(response.data)
    }) .catch((err) => {
        console.log("error in /weather:", err);
        res.sendStatus(500)
    })
})


module.exports = router;