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




const newSchema = new mongoose.Schema({
    email:{
        type:String},
        password:{
            type:String},
            name:{
                type:String
            }
    })

    const collection = mongoose.model("collection",newSchema)

    module.exports=collection




    //Router

    app.get("/",cors(), (req,res)=>{

    })

    app.post("/",async(req,res)=>{
        const{email,password}=req.body

        try{
            const check=await collection.findOne({email:email,password:password})

            if(check){
                res.json("exist")
            }
            else{
                res.json("not exist")
            }
        } catch(e){
             res.json("not exist")
        }
    })




    

    app.post("/register",async(req,res)=>{
        const{email,password,name}=req.body

        const data={
            email:email,
            password:password,
            name:name
        }

        try{
            const check=await collection.findOne({email:email})

            if(check){
                res.json("exist")
            }
            else{
                res.json("not exist")
                await collection.insertMany([data])
            }
        } catch(e){
             res.json("not exist")
        }
    })




    //franchise

    const new1Schema = new mongoose.Schema({
        email:{
            type:String},
                name:{
                    type:String
                },
                phoneNumber:{
                    type:String
                },
                city:{
                    type:String
                },
                introduction:{
                    type:String
                }
        })
    
        const franchise = mongoose.model("franchise",new1Schema)
    
        module.exports=franchise

    app.post("/franchise",async(req,res)=>{
        const{email,phoneNumber,city,name,introduction}=req.body

        const data={
            email:email,
            phoneNumber:phoneNumber,
            name:name,
            city:city,
            introduction:introduction
        }

        try{
            const check=await franchise.findOne({email:email, password:password, name:name, city:city})

            if(check){
                res.json("exist")
            }
            else{
                res.json("not exist")
                await franchise.insertMany([data])
            }
        } catch(e){
             res.json("not exist")
        }
    })




