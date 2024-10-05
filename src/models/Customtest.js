const mongoose = require('mongoose');
const validator = require('validator');
const customtest = new mongoose.Schema({
 Question:{
   type:String,
   required:true
},   
option1:{
    type:String,
    required:true,
    
},
option2:{
    type:String,
    required:true

},
option3:{
    type:String,
    required:true

},
option4:{
    type:String,
    required:true

},
Answer:{
    type:String,
    required:true

}

})

const CustomTest = new mongoose.model('CustomTest',customtest);
module.exports = CustomTest;
