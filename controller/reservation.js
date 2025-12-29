import ErrorHandler from "../errors/error.js";
import { Reservation } from "../models/reservatonSchema.js";

export const sendReservation = async (req, res, next)=>{
    const {firstName, lastName, email, phone, date, time}= req.body;
    if(!firstName || !lastName || !email || !phone || !date || !time){
        return next(new ErrorHandler("Please full fill reservation form!", 400));
    }try{
        await Reservation.create({firstName, lastName, email, phone, date, time});
        res.status(200).json({
            success: true,
            message: "Reservation sent Successfully!"
        });
    }
    catch(error){
            if(error.name === "validationError"){
               const validationErrors =Object.values(error.errors).map(
                (err)=> err.message 
               ); 
               return next(new ErrorHandler(validationErrors.join(" , "),400));
            }
            return next(error);
    }
}