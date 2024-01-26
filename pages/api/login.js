
import user from "../../models/user";
import connectDb from "../../middleware/mongoose";
var CryptoJS = require("crypto-js");
var jwt=require('jsonwebtoken')
const handler = async (req, res) => {
  if (req.method === "POST") {
    // console.log(req.body);
    let user1 = await user.findOne({ "email": req.body.email });

    if (user1) {
      const bytes = CryptoJS.AES.decrypt(user1.password, process.env.AES_SECRET);
      let decryptedpass = bytes.toString(CryptoJS.enc.Utf8);

      if (req.body.email == user1.email && req.body.password == decryptedpass) {
        var token=jwt.sign({  email: user1.email, name: user1.name}, process.env.JWT_SECRET,{
          expiresIn:"2d"
        });
        res.status(200).json({success: true, token});
      } else {
        res.status(200).json({ success: false, error: "Invalid credentials" });
      }
    } else {
      res.status(200).json({ success: false, error: "No user found" });
    }
  } else {
    res.status(400).json({ error: "This method is not allowed" });
  }
};

export default connectDb(handler);
