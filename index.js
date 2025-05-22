
import express from "express";
import dotenv from "dotenv";
dotenv.config()

import cors from "cors";
import connectDB from  "./databasE/connectDB.js"
import userRoute from "./routes/userRoutes.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/user",userRoute)

app.get("/", (req, res) => {
    
    res.status(200).json({ message: "API changed successfully" });
});

app.get("/api/heart-beat", (req, res) => {
    res.status(200).json({ data: "Heartbeat was successful" });
    console.log("Heart beat was sucessfull")
});
console.log(process.env.PORT)
app.listen(process.env.PORT, () => {
    console.log(`Server running successfully at port ${process.env.PORT}`);

});
connectDB()