const express = require('express')
const path = require('path')

const app = express()

// app.set("assets", path.join(__dirname, "assets"));
app.use("/assets", express.static("./assets"));

app.get('/', (req, res)=>{
    res.sendFile('index.html',{
        root: __dirname
    })
}).listen(909)