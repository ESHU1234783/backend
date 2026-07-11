import dotenv from "dotenv"
import express from "express"
import DB from "./config/db.js"
import route from "./routes/route.js"
import resumeroute from "./routes/resume.js";
import cors from "cors"

dotenv.config();

const PORT = process.env.PORT || 8000;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", route);
app.use("/api", resumeroute);


// Database connection
DB();

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});