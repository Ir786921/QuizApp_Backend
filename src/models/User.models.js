const mongoose = require('mongoose')
const { isLowercase } = require('validator');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const UserSchema = mongoose.Schema({
    fullName:{
        type:string,
        required:true,
        isLowercase:true,    
    },
    username:{
        type:string,
        required:true,
        unique:true   
    },
    email:{
        type:string,
        required:true,
        isLowercase:true,
        unique:true   
    },

    password:{
        type:string,
        required:true,    
    },
    refreshToken:{
        type:string,
        required:true
    },
    ProfilePicture :{
        type:string,
        required:true
    }
    

},{timestamp:true});

UserSchema.pre("save",async function(next){
      
    if (!this.isModified("password")) return next();

     this.password = await bcrypt.hash("this.password" , 10)
     next();
});

UserSchema.methods().isPasswordCorrect = async function (password) {
     return await bcrypt.compare(password,this.password);
};

UserSchema.methods().generateAccessToken = function () {
    jwt.sign(
        {
            _id : this_id,
            email : this.email,
            fullName : this.fullName
        },
     process.env.ACCESS_TOKEN,
     {
        expireIn:process.env.ACCESS_TOKEN_EXPIRY
     }
    )
};


UserSchema.methods().generateRefreshToken = function () {
    jwt.sign(
        {
            _id : this_id,
            
        },
     process.env.REFRESH_TOKEN,
     {
        expireIn:process.env.REFRESH_TOKEN_EXPIRY
     }
    )
};



export const User = mongoose.model("User",UserSchema);