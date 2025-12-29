import mongoose  from "mongoose";
export const dbConnection =()=>{
    mongoose.connect(process.env.MONGO_URI,{
           dbName: "RESTAURANT"
        }).then(()=>{
console.log("CONNECTED TO DB SUCCESSFULLY");
        }).catch(err=>{
            console.log(`some error occured during while connecting to db ${err}`); 
        })
}