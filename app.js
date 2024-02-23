const express = require("express")
const app = express();
const PORT= process.env.PORT || 3000

app.get("/",function(req,res){
res.send("Hello World");
})

app.get("/students",function(req,res){
    var data=[
        {id:1,name:"Mohamad Yassine"},
        {id:2,name:"Ahmad Kassem"},
        {id:3,name:"Hassan Baalbaki"},
        {id:4,name:"Bilal Hayek"},
        {id:5,name:"Pierre Mahdi"}
    ]
    res.send(data);
    })
    
app.listen(PORT)