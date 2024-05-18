// import express from "express";
// import cors from "cors";
// import { connectDB } from "./config/db.js";
// import foodRouter from "./routes/foodRoute.js";
// import userRouter from "./routes/userRoute.js";
// import "dotenv/config.js";

// //app config
// const app = express();
// const port = 4000;

// //middleware
// app.use(express.json());
// app.use(cors());

// // db connection
// connectDB();

// // api endpoints
// app.use("/api/food", foodRouter);
// app.use("/images", express.static("uploads"));
// app.use("/api/user", userRouter);

// app.get("/", (req, res) => {
//   res.send("API Working");
// });

// app.listen(port, () => {
//   console.log(`Server started on http://localhost:${port}`);
// });

import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import dotenv from "dotenv";
import path from "path";

// Load environment variables
dotenv.config();

// App config
const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cors());

// DB connection
connectDB();

// Serve static files from the "uploads" directory
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// API endpoints
app.use("/api/food", foodRouter);
app.use("/api/user", userRouter);

// Root endpoint
app.get("/", (req, res) => {
  res.send("API Working");
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
