



const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {                         // define the home page route
    res.send("Welcome to notes route....")
})




module.exports = router                             //  exported in order to be able to use for any end point......




