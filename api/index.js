// Embedded below is essentially the simplest Express app you can create. It is a single file app.
 
import express from "express"
import cookieParser from "cookie-parser";
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js"
import categoriesRoute from "./routes/categories.js";
import courseRoute from "./routes/course.js"
import emailRoute from "./routes/email.js";
import purchaseRoute from "./routes/purchase.js"
// // cors
import cors from "cors";
 
const app = express()
dotenv.config()
const port = 5000
 
 
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};
 
mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});
 
 
// Middlewares
//  cors
app.use(cors())
app.use(cookieParser())
app.use(express.json())

 
app.use("/api/v2/auth", authRoute);
app.use('/api/v2/users', usersRoute);
app.use("/api/v2/email", emailRoute);
app.use('/api/v2/purchase', purchaseRoute);
app.use("/api/v2/course", courseRoute);
app.use('/api/v2/categories', categoriesRoute);

//  error handler middleware
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
  });
  
 
app.listen(port, () => {
  connect();
  console.log(`Example app listening on port ${port}`)
})
 
