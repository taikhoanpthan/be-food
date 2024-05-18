// import mongoose from "mongoose";

// const foodSchema = new mongoose.Schema({
//     name: {type:String,required:true},
//     description: {type:String,required:true},
//     price: {type:Number,required:true},
//     image: {type:String,required:true},
//     category: {type:String,required:true}
// })

// const foodModel = mongoose.model.food || mongoose.model("food",foodSchema);

// export default foodModel;
import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
});

// Sửa đổi dòng sau đây: "mongoose.model.food" thành "mongoose.model('Food', foodSchema)"
const foodModel = mongoose.model("Food", foodSchema);

export default foodModel;
