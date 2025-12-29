import mongoose from "mongoose";
import validator from "validator";

const reservationSchema= new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        minLength: [3, "First name should contain at least 3 charactor"] ,
         maxLength: [30, "First name should not exceed the 30 charactor"] 
    },
     lastName:{
        type: String,
        required: true,
        minLength: [3, "Last name should contain at least 3 charactor"] ,
         maxLength: [30, "Last name should not exceed the 30 charactor"] 
    },
    email:{
            type: String,
            required: true,
            validate :[validator.isEmail, "Provide a valid Email"]
    },
    phone:{
        type: String,
          required: true,
           minLength: [10, "Phone no. should have 10 digits"] ,
         maxLength: [10, "Phone no. should have 10 digits"]
    },
    time:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    }

})
export const Reservation = mongoose.model("Reservation", reservationSchema);