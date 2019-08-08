const mongoose = require('../libs/mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    username: String,
    password: String,
    age: Number
})


exports.User = mongoose.model("User", schema);