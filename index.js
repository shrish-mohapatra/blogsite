// Imports
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// GET request
app.get('/', (req, res) => {
    // req: request, res: response
    res.json({
        message: "Welcome to my blog!"
    })
})

app.listen(port, () => {
    console.log("The server is not running on port", port)
})