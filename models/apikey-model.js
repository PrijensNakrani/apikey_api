const mongoose = require('mongoose')


const apiKeySchema = mongoose.Schema({
    apiKey: {
        type: String,
        required: true
    },
})

const apiKey = mongoose.model('apiKey',apiKeySchema)

module.exports = apiKey