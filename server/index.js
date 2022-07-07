import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';


import Route from './routes/route.js';
import Connection from './connnection/db.js';
import DefaultData from './default.js';


const app = express();


app.use(cors());
app.use(bodyParser.urlencoded({ extended : true}));
app.use(bodyParser.json({ extended : true}));
app.use('/',Route);



const PORT=8000;

Connection();

app.listen(PORT,()=>console.log(`server is running on PORT ${PORT}`));

DefaultData();