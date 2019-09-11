const express = require('express');
const app = express();
const user= require('./controllers/user-controller');
// const videos= require('./controllers/video-controller');
// const sequelize= require('./db');


app.listen(3000, function(){
    console.log('Yo im on 3000.')
});
app.use('covermeup/test', function(req,res){
    res.send("This is a test for Postman");
});