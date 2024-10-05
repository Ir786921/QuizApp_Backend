const mongoose = require('mongoose');
const validator = require('validator');
const response = new mongoose.Schema({
 QuestionNo:{
   type:Number,
   required:true
},   
selectedAnswer:{
    type:String,
    required:true,
    
},
status:{
    type:String,
    required:true

},
markForReview:{
    type:String,
    required:true

}

})

const Response = new mongoose.model('Response',response);
module.exports = Response;
