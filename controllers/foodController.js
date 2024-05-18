// import foodModel from "../models/foodModel.js";
// import fs from 'fs'

// // add food item
// const addFood = async (req,res) => {

//     let image_filename = `${req.file.filename}`;

//     const food = new foodModel({
//         name: req.body.name,
//         description: req.body.description,
//         price: req.body.price,
//         category: req.body.category,
//         image: image_filename
//     })
//     try {
//         await food.save();
//         res.json({success:true,message:"food added"})
//     } catch (error) {
//         console.log(error);
//         res.json({success:false,message:"Error"})
//     }

// }

// // all food list
// const listFood = async (req,res) => {
//     try {
//         const foods = await foodModel.find({});
//         res.json({success:true,data:foods})
//     } catch (error) {
//         console.log(error);
//         res.json({success:false,message:"Error"})
//     }
// }

// //remove food item
// const removeFood = async (req,res)=>{
//     try {
//         const food = await foodModel.findById(req.body.id);
//         fs.unlink(`uploads/${food.image}`,()=>{})

//         await foodModel.findByIdAndDelete(req.body.id);
//         res.json({success:true,message:"food removed"})
//     } catch (error) {
//         console.log(error);
//         res.json({success:false,message:"error"})
//     }
// }

// export {addFood,listFood,removeFood}
import foodModel from "../models/foodModel.js";
import fs from 'fs';
import path from 'path';

// add food item
const addFood = async (req, res) => {
    const image_filename = req.file ? req.file.filename : '';

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    });

    try {
        await food.save();
        res.json({ success: true, message: "Food added" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

// all food list
const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({ success: true, data: foods });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

// remove food item
const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id);
        if (food) {
            const imagePath = path.join('uploads', food.image);
            fs.unlink(imagePath, (err) => {
                if (err) console.log(err);
            });

            await foodModel.findByIdAndDelete(req.body.id);
            res.json({ success: true, message: "Food removed" });
        } else {
            res.json({ success: false, message: "Food not found" });
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

export { addFood, listFood, removeFood };
