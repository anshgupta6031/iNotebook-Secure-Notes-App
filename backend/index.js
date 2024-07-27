



const connectToMongo = require("./db")
const express = require('express')

connectToMongo()
const app = express()
const port = 5000



app.get('/', (req, res) => {
    res.send("Hello Ansh...")
})


app.use(express.json())                             //  middleware........


//  Routes............
app.use("/api/auth", require("./routes/auth"))                             //  goto http://localhost:3000/api/auth
app.use("/api/notes", require("./routes/notes"))                           //  goto http://localhost:3000/api/notes



app.listen(port, () => {
    console.log(`iNotebook backend listening on port ${port}`)
})





