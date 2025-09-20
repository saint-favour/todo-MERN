const express = require("express")
const mongoose = require("mongoose")
const cors = require('cors')
const UsersModel = require('./models/Users')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect(
  "mongodb+srv://saintfavouramaechi3_db_user:R1FUQ10WaUvgUOuU@cluster0.u1znvcs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/users"
);

app.post("/Login", (req, res) => {
 const {email, password} = req.body;
 UsersModel.findOne({email: email})
 .then(user => {
    if(user){
        if (user.password === password) {
            res.json("success")
        } else{
            res.json("password is incorrect")
        }
    } else{
        res.json("data does not exist ")
    }
 })
});

app.post('/Register', (req,res) => {
    UsersModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.listen(5000, () => {
    console.log("sever running successfully");
})