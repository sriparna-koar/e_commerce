const mongoose = require('mongoose');
const Orderschema =new mongoose.Schema({
    email:{type:String, required:true},
    orderId:{type:String, required:true},
    paytmInfo:{type:String, default:''},
    products:{type:Object, required:true},
//         {
// productId:{type:String},
// quantity:{type:Number, default:1}
//         }
//     ],
address:{type:String,required:true},
amount:{type:Number,required:true},
status:{type:String,default:'Pending',required:true},
},{timestamps:true});
mongoose.models={}
// export default mongoose.model("order",Orderschema);
export default mongoose.models.order || mongoose.model("order",Orderschema);