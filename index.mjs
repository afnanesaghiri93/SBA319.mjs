// Imports
import express from 'express';
import mongoose from 'mongoose';
import Product from './models/product.model.js';
import productRoute from './routes/product.route.js'
import db from './db/conn.mjs';

import dotenv from 'dotenv';
// import Product from './models/product.modwl.js';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5050;// it will allow me to access the port from my.my dot env file, if  doesn't have a dot env file, it will set a default 


//  ================ Set up my view engine  ================

// set Middleware
app.use(express.json());//we use this to parse the body and  checking it out body with Postman.
app.use(express.urlencoded({extended: false}));

 //  Routes 
app.use("/api/products", productrRoute);

// app.use('/products', Product);
app.get("/", (req, res) => {
    res.send("Hello from Node API Server Updated");
  });

app.get('/api/products', async(req,res) => {
  try{
    const products = await Product.find({});
    res.status(200).json(products)
  } catch(enter){
    res.status(500).json({message: error.message});
  }
})
// app.get('/api/products/:id', async(req,res) => {
//     try{
//         const {id} = req.params;
//         const product = await Product.findById(id);
//         res.status(200).json(product);

//     }catch(error){
//         res.status(500).json({message: error.message})
//     }

// })
// app.post('/api/products', async(req,res) => {
//     console.log(req.body);
//     try{
//         const createproducts = await Product.create(req.body);
//         // res.status(200).jsom(createproducts)
//     } catch(error){
//         res.status(400).send(eroor);
//     }
// })

//update aproduct 
// app.put('/api/products/:id', async (req,res) => {
//     try{
//         const {id} = req.params;
//         const product = await Product.findByIdAndUpdate(id, req.body);
//         if(!product){
//             return res.status(404).json({message: "Product not found"});
//         }
//         const UpdatedProduct = await Product.findById(id);
//         res.status(200).json(UpdatedProduct);

//     }catch(error){
//         res.status(500).json({message: error.message})
//     }
// })


// Start my server 
app.listen(PORT, () => {
    console.log("Server is running on port 5050");
  });

//Delete a Product
// app.delete('/api/products/:id', async (req,res) => {
//     try {
//         const {id} = req.params;
//         const product = await Product.findByIdAndDelete(id);
//         if (!product){
//             return res.status(404).json({message: "Product not found"});
//         }
//         res.status(200).json({message:"Product deleted"})
//     } catch(error){
//         res.status(500).json({message: error.message})
//     }
// })






