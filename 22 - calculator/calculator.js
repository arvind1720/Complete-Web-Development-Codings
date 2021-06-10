
const express=require("express");
const bodyParser=require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended: true}));


///////////////////////////////////////////////////
app.get("/calculator",function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.post("/calculator",function(req,res){
  //console.log(req.body.num1);


  var num1=Number(req.body.n1);
  var num2=Number(req.body.n2);

  var result= num1+num2;

  res.send("Total is "+result);
});

app.get("/bmicalculator",function(req,res){
  res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/bmicalculator",function(req,res){
  //console.log(req.body.num1);


  var weight=parseFloat(req.body.weight);
  var height=parseFloat(req.body.height);

  var bmi=(weight/(height*height)).toFixed(2);

  res.send("Your bmi is "+bmi);
});


app.listen(3000,function(){
  console.log("Server is running on port 3000");
});
