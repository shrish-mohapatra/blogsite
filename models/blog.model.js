const mongoose = require("mongoose")

const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    coverImage: {
        type: String,
        required: false
    },
    content: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        required: false
    },
    date: {
        type: String,
        required: true
    }
})

const register = mongoose.model('blog', blogSchema)
module.exports = register