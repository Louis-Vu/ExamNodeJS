const express = require("express");
const route = express.Router();
router.get("/home",function(req,res){
    res.render("views/home");
})
router.get("/", (req, res) => {
    res.json(users);
  });
  router.get("/:id", (req, res) => {
    const found = users.some(user => user.id === parseInt(req.params.id));
  
    if (found) {
      res.json(users.filter(user => user.id === parseInt(req.params.id)));
    } else {
      res.sendStatus(400);
    }
  });
  
  router.post("/", (req, res) => {
    const newUser = {
      ProductCode: uuid.v4(), 
      ProductName: req.body.ProductName, 
      ProductDate: req.body.ProductDate,
      ProductOriginPrice: req.body.ProductOriginPrice,
      Quantity: req.body.Quantity, 
      ProductStoreCode: req.body.ProductStoreCode
    };
  
    if (!newUser.ProductCode || !newUser.ProductName || !newUser.ProductDate || !newUser.ProductDate || !newUser.ProductOriginPrice || !newUser.Quantity || !newUser.ProductStoreCode) {
      return res.sendStatus(400);
    }
    users.push(newUser);
    res.json(users);
  });
  //Update User
  router.put("/:id", (req, res) => {
    const found = users.some(user => user.ProductCode === parseInt(req.params.ProductCode));
    if (found) {
      const updateUser = req.body;
      users.forEach(user => {
        if (user.id === parseInt(req.params.id)) {
          user.name = updateUser.name ? updateUser.name : user.name;
          user.email = updateUser.email ? updateUser.email : user.email;
          res.json({ msg: "User updated", user });
        }
      });
    } else {
      res.sendStatus(400);
    }
  });
  //Delete User
  router.delete("/:id", (req, res) => {
    const found = users.some(user => user.id === parseInt(req.params.id))
    if (found) {
      users = users.filter(user => user.id !== parseInt(req.params.id))
      res.json({
        msg: "User deleted",
        users
      });
    } else {
      res.sendStatus(400);
    }
  });
  
  module.exports = router;