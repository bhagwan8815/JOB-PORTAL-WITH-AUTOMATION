// import mongoose from "mongoose";

// export const connection = ()=>{
//     mongoose.connect("process.env.MONGO_URI", {
//         dbName: "JOB_PORTAL_WITH_AUTOMATION"
//     }).then(()=>{
//         console.log("Connected to database.")
//     }).catch(err=>{
//         console.log(`Some error occured while connecting to database: ${err}`)
//     })
// }

// const mongoose = require("mongoose");

import mongoose from "mongoose";
// require("dotenv").config;

const PORT ="mongodb://127.0.0.1:27017"
 export const connection =() =>{
    mongoose.connect(PORT ,  {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    })
    .then( ()=>console.log("Successfully Connected to DataBase."))
    .catch( (error) =>{
        console.log("Issue in DB Connection.");
        console.error(error.message);
        process.exit(1);
    })
}

// Module.export = connection;