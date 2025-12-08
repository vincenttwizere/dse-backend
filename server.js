//creating express server
const express= require('express');
const dotenv = require('dotenv');
const {db}=require('./config/db.js');
const app =express();
//evn file config

dotenv.config();
//Test db conncetion
db.getConnection((err)=>{
    if(err){
        console.log('Database connection failed',err);
    }
    else{
        console.log('Database connected successfully');
    }
});

//routes and endpoints
app.get('/',(req,res)=>{
    res.send("Welcome to DSE Backend API developed by DSE Team");
})
//app listening port
const PORT= process.env.PORT || 3000; 
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});