const mongoose = require('mongoose')

const candidateSchema = mongoose.Schema ({
        name: {type: String, required: true},
        email: {type: String, required: true, unique: true},
        phone: {type: String, required: true, unique: true},
        wife: {type: String}
    },
    {timestamps: true}
)

module.exports = mongoose.model('candidateModel', candidateSchema)