const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors())
const PORT = 5000

app.listen(PORT, () => {
    console.log(`app is listening to PORT ${PORT}`)
})

mongoose.connect("mongodb+srv://souravlal03:SOurav123456@cluster0.br5uyte.mongodb.net/login-reg?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

mongoose.connection.on("error",err =>{
    console.log("err", err)
})

mongoose.connection.on("connected",(err,res) =>{
    console.log("mongoose is connected")
})

//routes

const userSchema = new mongoose.Schema({
         name: String,
         email: String,
         password: String,
     })
     const User = new mongoose.model("User", userSchema)

app.post("/login", (req,res) =>{
    const{email,password} = req.body
    User.findOne({email: email}).then((err, user) =>{
        if(user){
              if(password === user.password){
                res.send({message: "LOGIN SUCCESSFULL", user: user})
              }else{
                res.send({message: "PASSWARD DID NOT MATCHED"})
              }
        }else{
            res.send({message: "USER NOT REGISTERD"})
        }
    })
})

app.post("/register", (req,res) =>{
    const { name, email, password} = req.body
     User.findOne({email: email})
     .then( (err, user) => {
        if(user){
            res.send({message: "USER ALREADY REGISTERED"})
        } else {
             const user = new User({
      name,
      email,
       password
 })
 user.save().then((err) => {
        if(err){
            res.send(err)
        } else {
            res.send({message: "YOU HAVE SUCCESSFULLY REGISTERED"})}
 })

        }
    })
   
})


