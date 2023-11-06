const mongoose = require("mongoose");
const product_schema = new mongoose.Schema({
    productCode: {
        type: String,

    },
    productName: {
        type: String,
    },
    
    productDate: {
        type: String,
        
    },
    productOriginPrice: {
        type: String,
        
    },
    quantity: {
        type: String,
        
    },
    productStoreCode: {
        type: String,
        
    }
});
module.exports = mongoose.model("ProductCollection",product_schema);