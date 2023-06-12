import express from "express";
import add from "./Controllers/add.js";
// import signup from "./Controllers/signup.js";
// import signin from "./Controllers/signin.js";
// import addfood from './Controllers/addfood.js';
// import allFoods from './Controllers/allFoods.js';
// // import getCartItems from "./Controllers/addToCart.js";
// import addToCart from "./Controllers/addToCart.js";
// import getCart from "./Controllers/getCart.js";
// import deleteCartItem from "./Controllers/deleteCartItem.js";
// import decCartItem from "./Controllers/decCartItem.js";

const router=express.Router();

// router.get("/",(req,res) =>{
//     res.("In slash")
// })
router.post("/add", add);
router.get("/search",(req,res) =>{
    res.send("In slash")
})
router.get("/update",(req,res) =>{
    res.send("In slash")
})
router.get("/del",(req,res) =>{
    res.send("In slash")
})
router.get("/view",(req,res) =>{
    res.send("In slash")
})
// router.post("/signup",signup); 
// router.post("/signin",signin);
// // router.post("/totalAnimals",verify, totalAnimals);
// router.post("/foods",addfood);
// router.get("/allFoods", allFoods);
// router.post("/addToCart", addToCart);
// router.post("/getCart", getCart);
// router.post("/delCart",deleteCartItem);
// router.get("/decCart",decCartItem);
export {router};