import app  from "./app.js";
import dotenv from "dotenv";

app.listen(process.env.PORT || 5000,()=>{
    console.log(`server is running on port No. ${process.env.PORT}`);

})