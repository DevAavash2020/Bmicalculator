const { response } = require("express");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));


app.get("/", (request,response)=>{
    response.sendFile(__dirname + "/index.html");
})

app.post("/index.html",(req,res)=>{
    const weight = parseFloat(req.body.num1);
    const height = parseFloat(req.body.num2);

    const result = weight/(height*height);

    res.send("The bmi is " + result);
})
app.listen("3000", function (){
    console.log("listening to the port 3000")
})
