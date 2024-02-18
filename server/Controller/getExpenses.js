const express = require('express');
const router = express.Router();
const User = require('../models/UserData');

router.get('/get', async (req, res) => {
    const data = await User.findAll();
    console.log('fetching data from apio', data)
    res.send(data);
})


module.exports = router;