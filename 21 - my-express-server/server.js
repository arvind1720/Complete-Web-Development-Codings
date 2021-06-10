
const express=require ("express");

const app=express();

app.get("/",function(req,res){
  res.send("<h1>Hello world</h1>");
});

app.get("/contact",function(req,res){
  res.send("Contact me at:arvindellan1@gmail.com");
});

app.get("/about",function(req,res){
  res.send("Visit https:wwww.arvindunimap.com for more info");
});

app.get("/hobbies",function(req,res){
  res.send("Playing chess,Rubiks cube,Movies");
});



app.listen(3000,function(){
  console.log("Server started on port 3000");
});
