import express from "express";
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';

const app = express ();

app.use('/posts',postRoutes);
app.use(bodyParser.json({limit :"30mb", extended: true}));
app.use(bodyParser.urlencoded({limit :"30mb", extended: true}));
app.use(cors());



//connecting server to db
const CONNECTION_URL ="mongodb+srv://haris123:haris123@developerstack.dapr6.mongodb.net/<dbname>?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL,{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>app.listen(PORT,()=>console.log(`Server running on port : ${PORT}`)))
.catch((error)=>console.log(console.log(console.log(error.message))));

mongoose.set('useFindAndModify',false);