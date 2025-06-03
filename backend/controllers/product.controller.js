import Product from '../models/product.model.js' //Accesses database of products, also contains the schema, which includes all the details on products
import mongoose from 'mongoose';

export const getProducts = async(req, res) => {
    
    try{
        const products = await Product.find({}); //If you pass in the empty brackets to .find, it collects ALL the things applicable
        res.status(200).json({success: true, data: products}) //res acts like a return method, essentially, it sends a response back to the client
        // Basic status code indicating OK! 201 = created, 400 = bad request, 500 = server error, 404 = not found
    } catch (error) {
        console.log("Error in fetching products:", error.message);
        res.status(500).json({success:false, message: "Server Error"});
    }
};

export const createProducts = async (req, res) => {
    const product = req.body;

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({success:false, message: "Please provide all fields"});
    }
    
    const newProduct = await Product.create(product);

    try {
        await newProduct.save()
        res.status(201).json({success:true, data: newProduct})
    }
        catch (error) {
            console.error("Error in Create product:", error.message);
            res.status(500).json({success:false, message: "Server Error"});
        }
};

export const updateProducts = async (req, res) => {
    const {id} = req.params; //extracts prod ID from the URL
    const product = req.body; //extracts new data from the client request body

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({success: false, message: "Invalid Product ID"});
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, {new: true});
        res.status(200).json({success: true, data:updatedProduct});


    } catch(error) {
        console.error("Error in updateProduct:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }

};

export const deleteProducts = async (req, res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({success:false, message: "Invalid product ID"});
    } 
    
    try { 
        await Product.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "Product deleted"});
    }
    catch (error) {
        console.log("Error in deleting product:", error.message);
        res.status(500).json({success: false, message: "Product not found"});
    }
};