const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect("mongodb+srv://Harish:X6mGyCzGIqGJ6mzg@cluster0.brnwn.mongodb.net/KETNIPZ?retryWrites=true&w=majority")
}

module.exports = connect;