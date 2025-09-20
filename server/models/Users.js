const mongoose = require("mongoose")


const UsersSchema = new mongoose.Schema({
    name: String,
    email: String,
    Password: String,
    confirmpassword: String
})

const UsersModel = mongoose.model("users", UsersSchema);
module.exports = UsersModel;