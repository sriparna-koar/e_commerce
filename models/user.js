const mongoose = require('mongoose');
const Userschema =new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true,unique:true},
    password:{type:String, required:true}
 
  
},{timestamps:true});
mongoose.models={}
// export default mongoose.model("user",Userschema);
export default mongoose.models.user || mongoose.model("user",Userschema);