const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://hello:abhi143riya@cluster0.p7oghxx.mongodb.net/?retryWrites=true&w=majority";

const connectToMongo = () => {
    mongoose.connect(mongoURI, { dbName: 'staticstorm' }, () => {
        console.log("Connected To Mongo Successfully!!");
    })
}

module.exports = connectToMongo;
