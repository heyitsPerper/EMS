const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

const app = express();


app.listen(3000, ()=>{
    console.log("Server Start...");
})