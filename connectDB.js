import mongoose from "mongoose";

const connectDB= async()=>{
    // console.log(print.env.MODBURL)
    try{
        await mongoose.connect(process.env.MODBURL)
        console.log("Database connected success")
    }
    catch (error){
        console.log(error)
    }
}

export default connectDB
