const express = require('express')
const bodyParser = require('body-parser')

const database = require('./config/database')
const Blog = require('./models/blog.model')

const app = express()
const port = 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


// Sample request
app.get('/', (req, res) => {
    // req: request, res: response
    res.json({
        message: "Welcome to my blog!"
    })
})

// Blog CRUD requests
app.post('/api/blog', async (req, res) => {
    const blog = await new Blog({
        ...req.body
    })

    blog.save()

    res.json({
        message: "Created blog!"
    })
})

app.get('/api/blog', async (req, res) => {
    const blogs = await Blog.find()

    res.json({
        blogs
    })
})

app.put('/api/blog', async (req, res) => {
    await Blog.updateOne({_id: req.body.id}, req.body)

    res.json({
        message: "Edited blog " + req.body.id
    })
})

app.delete('/api/blog', async (req, res) => {
    await Blog.findByIdAndDelete(req.body.id)

    res.json({
        message: "Removed blog " + req.body.id
    })
})


app.listen(port, () => {
    console.log("The server is not running on port", port)
})