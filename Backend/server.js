const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes/authRoute');
require('dotenv').config(); 
const cors = require('cors');


mongoose.connect(process.env.MONGO_URL,
    {useNewUrlParser:true,useUnifiedTopology:true}
    ,()=>{
    console.log('Database connected');
})


app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:false}));

app.use(routes);
app.get('/siva',(req,res)=>{
    res.send('Siva');
})

app.listen(process.env.PORT,()=>{
    console.log('Server is up and running',process.env.PORT);
})

