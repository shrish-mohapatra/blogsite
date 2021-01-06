const mongoose = require("mongoose")
const keys = require("./keys")

mongoose.connect(keys.database, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(() => console.log("Connected to mongoDB"))
    .catch(error => console.log(error))