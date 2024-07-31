const mongoose=require('mongoose')
const UserSchema=new mongoose.Schema({
    name:String,
    email:{
        type:String,
        unique:true
    }
    ,
    password:String,
   isAdmin:Boolean,
}{
    timestamps:true
}
)
const UsertModel=mongoose.Model('user',UserSchema)
model.exports=userModel