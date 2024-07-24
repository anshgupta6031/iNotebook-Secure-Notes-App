



const express = require('express')
const User = require("../models/User")
const router = express.Router()


//  creating a user using : POST "http://localhost:3000/api/auth"

router.post('/', (req, res) => {                         // define the home page route
    console.log(req.body)

    const user = User(req.body)
    user.save()

    res.send(req.body)
})




module.exports = router                             //  exported in order to be able to use for any end point......




