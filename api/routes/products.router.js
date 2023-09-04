// ***********LOCAL************
// const express = require("express");
// const router = express.Router();
// const products = require("../data/products");
// const mongoose = require("mongoose");
// // CRUD OPERATIONS
// // http://localhost:2000/api/products
// router.route("/").get((req, res) => {
//   console.log("working");
//   console.log(products);
//   res.json(products);
// });
// module.exports = router;

// ************DATABASE************
const express = require('express')
const router = express.Router();
const Products = require("../models/productModel");
// console.log("Products Model = ", Products);
router.route('/').get( (req, res) => {

    Products.find().then((docs)=> {
        if(!docs){
            res.status(400).send({message: "something went wrong"});
        }else{
            res.send(docs);
        }
    }).catch((err)=>{
        res.status(500).send({message: "server not available"});
    })
   
});
module.exports = router;