
const mongoose = require('mongoose')

const mongoURI = process.env.MONGO_URI;

const connectToMongo = async () => {
    mongoose.connect(mongoURI)
    .then(() => {
        console.log("Connected to Mongo successfully!");
    })
    .catch((error) => {
        console.log("Error connnecting to Mongo: ", error.message)
    })
}

module.exports = connectToMongo;