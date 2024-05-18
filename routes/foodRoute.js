// import express from 'express';
// import { addFood,listFood,removeFood } from '../controllers/foodController.js';
// import multer from 'multer';

// const foodRouter = express.Router();

// // Image Storage Engine

// const storage = multer.diskStorage({
//     destination:"uploads",
//     filename:(req,file,cb)=>{
//         return cb(null,`${Date.now()}${file.originalname}`)
//     }
// })
// const upload = multer({storage:storage})

// foodRouter.post("/add",upload.single("image"),addFood)
// foodRouter.get("/list",listFood)
// foodRouter.post("/remove",removeFood);

// export default foodRouter;
import express from "express";
import {
  addFood,
  listFood,
  removeFood,
} from "../controllers/foodController.js";
import multer from "multer";
import path from "path";
import auth from "../middleware/auth.js"; // Import middleware

// Create a Router
const foodRouter = express.Router();

// Image Storage Engine
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

foodRouter.post("/add", auth, upload.single("image"), addFood); // Sử dụng middleware auth
foodRouter.get("/list", auth, listFood); // Sử dụng middleware auth
foodRouter.post("/remove", auth, removeFood); // Sử dụng middleware auth

export default foodRouter;
