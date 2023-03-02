const mongoose = require('mongoose')

const configureDb = () => {
    mongoose.set("strictQuery", false);
    mongoose.connect('mongodb://localhost:27017/mern-redux-redis', {
        // useNewUrlParser: true, 
        // useUnifiedTopology: true, 
        // useCreateIndex: true,
        // useFindAndModify: false,
    })
    .then(() => {
        console.log("Connected to db")
    })
    .catch(err => {
        console.log(err)
    })
}

module.exports = configureDb