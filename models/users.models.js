const mongoose = require("mongoose");
const user_schema = new mongoose.Schema({
    // _id
    ProductCode: String,
    ProductName: String, 
    ProductDate: Date,
    ProductOriginPrice: String,
    Quantity: String, 
    ProductStoreCode: String,
});
module.exports = mongoose.model("exam",user_schema);// users
