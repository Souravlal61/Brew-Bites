const express = require("express");
const app = express();
app.listen(5000,() =>{
    console.log("server started");
});

app.post("/post",async(rerq,res) => {
 console.log(req.body);
})