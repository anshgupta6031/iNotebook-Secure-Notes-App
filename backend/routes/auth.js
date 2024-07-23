



const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {                         // define the home page route           //  goto http://localhost:3000/api/auth

    let obj = {
        name: "Ansh",
        age: 21,
    }

    res.json(obj)
})




module.exports = router                             //  exported in order to be able to use for any end point......




