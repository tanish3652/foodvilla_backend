import mongoose from "mongoose";

let isConnected = false;
export const dbConnection = async()=>{
if(isConnected){
    // this will prevent re-connection
    return
}
try{
        await mongoose.connect(process.env.MONGO_URI,{
            dbName: "RESTAURANT",
             serverSelectionTimeoutMS: 5000
        })
        isConnected =true;
        console.log("Mongo DB is Connected Successfully");
        
}catch (error){
        console.error(" MongoDB connection error:", error);
        throw error;
}
};