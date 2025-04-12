import express from "express";
import mongoose from "mongoose";
import { seedInitialProducts } from "./services/productService";
import productRouter from "./routs/productRout";
import dotenv from "dotenv";
import cors from "cors";
import userRoute from "./routs/userRoute";

dotenv.config()

const app = express()
const port = 3001;

app.use(express.json());
app.use(cors());



mongoose
.connect("mongodb://localhost:27017/outfitdb")
.then(() => console.log("mongo connected"))
.catch((err) => console.log("failed to connect", err));

//seed the products to database
seedInitialProducts();
app.use('/user', userRoute)
app.use("/products", productRouter)

app.listen(port, () => {
    console.log(`server is running at http://localhost: ${port}`)
})