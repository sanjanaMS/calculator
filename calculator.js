const express=require('express');
const app=express();
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));;
app.get("/",function(req,res){
  res.sendFile(__dirname+"/bmiCalculator.html");
});
app.post("/",function(req,res){
var weight=Number(req.body.W);
var height=Number(req.body.H);
var result=(weight/(height*height));
res.send("Your BMI is"+ result);

});
app.listen(3000,function(){
  console.log("Server is running on port 3000.");
});
