const productModel = require("./../models/product.model")

exports.product=function(req,res){
    res.render("auth/add");
}

exports.postProduct= function(req,res){
    const data = req.body;

       try {
        if(req.file){
            const file = req.file;
            const fq = require("fs");
            const img = fq.readFileSync(file.path);
            data.thumbnail ={
                contentType: file.mimetype,
                data: img.toString("base64")
            }
        }
       const u = new productModel(data);
       u.save();
    
       res.redirect("/")
       } catch (error) {
        return res.send(error)
    }

}
 