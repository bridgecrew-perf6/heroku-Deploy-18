const express = require("express");
const req = require("express/lib/request");
const app = express();
let port = process.env.PRT || 3000;
const importData = require("./data.json");

app.get("/",(req,res)=>{
    res.send("Hello, World!!!")
})

app.get("/Employees",(req,res)=>{
    res.send(importData)
})

app.listen(port,()=>{
    console.log(`Server is Running on Port http://localhost:${port}`)
})