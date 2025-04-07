import express from "express";
import mongoose from "mongoose";
import { seedInitialProducts } from "./services/productService";
import productRouter from "./routs/productRout";
import dotenv from "dotenv";

dotenv.config()

const app = express()
const port = 3001;

mongoose
.connect(process.env.DATABASE_URL ||"")
.then(() => console.log("mongo connected"))
.catch((err) => console.log("failed to connect", err));

//seed the products to database
seedInitialProducts();

app.use("/products", productRouter)

app.listen(port, () => {
    console.log(`server is running at http://localhost: ${port}`)
})