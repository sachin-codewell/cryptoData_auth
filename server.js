// all depencies and inbuilt library
const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('morgan')
const authRoutes  = require('./router/authenticationRoute')
const mongoose = require('mongoose');



// all variable
const app = express();
app.use(bodyParser.json())

app.use(cors({
    origin:true,
    credentials:true
}));
app.use(logger('dev'));

app.use('/api',authRoutes)

mongoose.connect( 'mongodb://localhost:27017/BlogSpotUserDB');
mongoose.connection.once('open',()=>{
    console.log('connected');
}).on('error',(err)=>{
    console.log(err);
})

const port = 8000;
app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('server is running on port 8000 ')

})