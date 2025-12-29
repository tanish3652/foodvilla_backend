import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./databases/dbConnection.js";
import { errorMiddlewhere } from "./errors/error.js";
import reserbationRoute from "./routes/reserbationRoute.js";


const app = express()
dotenv.config({path: "./config/config.env"})

// connecting frontend to the backend server
app.use(cors({
    origin:[process.env.FRONTENED_URL],
    methods:["POST"],
    credentials: true
}))
// this will conver string data into a Json fromet before stroing into DB
app.use(express.json());

// parsing  incoming request bodies with URL-encoded payloads essential when data coming from HTML(forms,loginlayouts)
app.use(express.urlencoded({
    extended:true
}))

// Reservation routing 
app.use('/api/reservation', reserbationRoute);

dbConnection();

// Handling an error using Own error handler.
app.use(errorMiddlewhere);

export default app;


