



const jwt = require('jsonwebtoken')

const JWT_SECRET = "sjdgf765w3udckjwehrw8764"


//  get the user from the jwt token and add its id to the req object......

const fetchuser = (req, res, next) => {

    const token = req.header("auth-token")

    if (!token) {
        res.status(401).json({ error: "Please authenticate using a valid token." })
    }


    try {
        const data = jwt.verify(token, JWT_SECRET)
        req.user = data.user
        next()
    }

    catch (error) {
        res.status(401).json({ error: "Please authenticate using a valid token." })
    }
}




module.exports = fetchuser



