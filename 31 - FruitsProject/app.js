const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitsDB', {useNewUrlParser: true});

const fruitSchema=new mongoose.Schema({

name:
{
  type:String,
  required:[true,"Please check your data entry"]
},



rating:{

  type:Number,
  min:1,
  max:10
},
review:String

});

const Fruit=mongoose.model("Fruit", fruitSchema);

const fruit=new Fruit({
 name:"Peaches",
  rating:7,
  review:"yumm yumm yumm."
});

// fruit.save()

const personSchema=new mongoose.Schema({

type:Number,
  name:String,
  age:Number,
  favouriteFruit:fruitSchema
});

const Person=mongoose.model("Person",personSchema);

const papaya=new Fruit({
  name:"papaya",
  score:9,
  review:"Great fruit"
});
  const greenapple=new Fruit({
    name:"pineapple",
    score:9,
    review:"Great fruit"
});

papaya.save();

Person.updateOne({name:"John"},{favouriteFruit:papaya},function(err){
  if(err){
    console.log(err);

  }else{
    console.log("Successfully updated the document");
  }
});

// const person =new Person({
//   name:"Amy",
//   age:37,
//   favouriteFruit:greenapple
// });

// person.save();


///new fruit

const kiwi=new Fruit({
  name:"Kiwi",
  rating:7,
  review:"Pretty solid as anxjnjznjznjznjjj fruit."
});

const orange=new Fruit({

  rating:6,
  review:"Pretty solid as a fruit."
});

const banana=new Fruit({
  name:"Banana",
  rating:5,
  review:"Pretty solid as a fruit."
});

// Fruit.insertMany([kiwi,orange,banana], function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Successfuly saved all the fruits to fruitsDB");
//   }
// });

Fruit.find(function(err, fruits){
  if(err){
    console.log(err);
  }else{

    fruits.forEach(function(fruit){
      console.log(fruit.name);
    });
  }
});

//  Fruit.updateOne({_id:"60bfbf028660d1fa58462795"},{name:"Peachesss3"},function(err){
//    if(err){
//     console.log(err);
//   }else{
//     console.log("Successfuly updated the fruit")
//   }
//
// });

// Fruit.deleteMany({name:"Peachesss3"},function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Suceesfully deleted the documebt");
//   }
// });

// Person.deleteMany({name:"John"},function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Successfuly deleted all document");
//   }
// });
// Person.updateOne({name:"John"},{favouriteFruit:greenapple},function(err){
//   if(err){
//     console.log(err);
//
//   }else{
//     console.log("Successfully updated the document");
//   }
// });
