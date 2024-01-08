import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"
import productRoutes from "./routes/productsRoutes.js"
import authRoute from "./routes/authRoutes.js"


const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());


app.use(cookieParser());

app.use("/api/products", productRoutes);
app.use("/api/auth", authRoute);






const PORT=8000;
app.listen(PORT, ()=>{

console.log(`the server is runnig on the port ${PORT}`);


});