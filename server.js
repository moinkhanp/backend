import dotenv from "dotenv";
import express from 'express'
import mongoose from 'mongoose'
import bodyparser from 'body-parser';
import route from './route/route.js'
import path from 'path'
const __dirname = path.resolve();

const router = express.Router();

import Cors from 'cors';
const PORT = process.env.PORT || 8001;    

const app = express();  
app.use(router);
  
app.use(express.json());
app.use(Cors())
  
 
const uri = "mongodb+srv://cruddemo:cruddemo@cluster0.o3bnl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
//database connection
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log(" database connected...");
}).on('error', function (err) {
      console.log(err);   
    }); 
 



//body parser
app.use(bodyparser.urlencoded({ 
    extended:true
}));
app.use(bodyparser.json());
app.use('/public', express.static(path.join(__dirname, 'public')));

//routes
route(app) 
 
app.listen(PORT,()=>{
    console.log("connected..") 
})
