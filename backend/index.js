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




    //Routes

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

    const userSchema = new mongoose.Schema({
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
    
        const partner = mongoose.model("partner",userSchema)
    
        module.exports = partner

        app.get("/franchise",cors(), (req,res)=>{

        })
       

    app.post("/",async(req,res)=>{
        const{email,phoneNumber,city,name,introduction}=req.body

        const data={
            email:email,
            phoneNumber:phoneNumber,
            name:name,
            city:city,
            introduction:introduction
        }

        try{
            const check=await partner.findOne({email:email, password:password})

            if(check){
                res.json("exist")
            }
            else{
                res.json("not exist")
                await partner.insertMany([data])
            }
        } catch(e){
             res.json("not exist")
        }
    })



// Venue Odering 


const new2Schema = new mongoose.Schema({
    email:{
        type:String},
            name:{
                type:String
            },
            phoneNumber:{
                type:String
            },
            date:{
                type:String
            },
            discription:{
                type:String
            }
    })

    const venue = mongoose.model("venue",new2Schema)

    module.exports=venue

app.post("/venue",async(req,res)=>{
    const{email,phoneNumber,date,name,discription}=req.body

    const data={
        email:email,
        phoneNumber:phoneNumber,
        name:name,
        date:date,
        discription:discription
    }

    try{
        const check=await venue.findOne({email:email, password:password})

        if(check){
            res.json("exist")
        }
        else{
            res.json("not exist")
            await venue.insertMany([data])
        }
    } catch(e){
         res.json("not exist")
    }
})



// product Schema
const proSchema = new mongoose.Schema({
    productid:{
        type:String},
        img:{
            type:Array},
        title:{
            type:String},
        desc:{
            type:String},
        price:{
            type:String},
           
    })

    const items = mongoose.model("items",proSchema)

    module.exports=items