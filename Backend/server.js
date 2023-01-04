require("dotenv").config();

const express = require("express");
const app = express();
const dotenv = require("env")

const {chats} = require("./data/data");

app.get("/api/chat",(req,res)=>{
    res.send(chats);

});


const PORT = process.env.PORT || 8000
app.listen(PORT);