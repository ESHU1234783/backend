import dotenv from "dotenv"
import express from "express"
import DB from "./config/db.js"
import route from "./routes/route.js"
import cors from "cors"

dotenv.config();
const app=express();
app.use(cors());
app.use(express.json());

app.use("/api",route);


//connection using port saved in .env file
DB();
const PORT= process.env.PORT || 3000;
app.listen(PORT,() =>{
    console.log(`server is running on ${PORT}`);
});