const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.get("/", function(req,res){
//res.send("<a href= __dirname+/index.html > click</a>");
res.sendFile(__dirname + "/index.html");
});
app.post("/", function(req, res){
	var n1 = Number(req.body.num1);
	var n2 = Number(req.body.num2);
	var n4 = (n1+n2)/2;
	res.send("The answer is "+ String(n4));
});


app.listen(3000, function(){
console.log("server is started");
});
