



const express = require('express')
const User = require("../models/User")
const { body, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const router = express.Router()
const JWT_SECRET = "sjdgf765w3udckjwehrw8764"                   //  this can be any string which will be used to verify the user if he is already has a registered email or not.......



//  creating a user using : POST "http://localhost:5000/api/auth/createuser"  No login required...

router.post('/createuser', [                                                      //  express-validator.........
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be at least 5 characters").isLength({ min: 5 }),
], async (req, res) => {

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }


    try {

        let user = await User.findOne({ email: req.body.email })
        if (user) {
            return res.status(400).json({ errors: "A user with this email already exists..." })
        }


        const salt = await bcrypt.genSalt(10)                               //  salt is added after the password to make it more secure.....
        const securedPassword = await bcrypt.hash(req.body.password, salt)          //  password along with the salt is hashed to make a secured password.....

        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: securedPassword,
        })



        const data = {
            user: {
                id: user.id
            }
        }

        const authToken = jwt.sign(data, JWT_SECRET)                //  an authentication token is generated by joining the data with the secret(so that the user can be verified later) which is then sent as the response......
        res.json({ authToken: authToken })

    }

    catch (error) {
        console.error(error.message)
        res.status(500).send("Some error occured...")
    }
})




module.exports = router




