import Product from "../models/product.model.js";

const getProducts = async (req,res) => {
    try{
        const products = await Product.find({});
        res.status(200).json(products)
      } catch(enter){
        res.status(500).json({message: error.message});
      }
}

const getProduct = async (req,res) => {
    try{
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);

    }catch(error){
        res.status(500).json({message: error.message})
    }
};

const createProduct = async(req,res) => {
    console.log(req.body);
    try{
        const createproducts = await Product.create(req.body);
        // res.status(200).jsom(createproducts)
    } catch(error){
        res.status(400).send(eroor);
    }
};

const updateProduct = async (req,res) => {
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if(!product){
            return res.status(404).json({message: "Product not found"});
        }
        const UpdatedProduct = await Product.findById(id);
        res.status(200).json(UpdatedProduct);

    }catch(error){
        res.status(500).json({message: error.message})
    }
};

const deleteProduct =  async (req,res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product){
            return res.status(404).json({message: "Product not found"});
        }
        res.status(200).json({message:"Product deleted"})
    } catch(error){
        res.status(500).json({message: error.message})
    }
};
module.exports={ getProducts, getProduct, createProduct, updateProduct, deleteProduct};