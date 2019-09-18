require('dotenv').config();
const express = require('express');
const app = express();
const user= require('./controllers/user-controller');
const upload= require('./controllers/upload-controller');
const sequelize= require('./db');

sequelize.sync();
app.use(express.json());
app.use('/covermeup/user', user);
app.use('/covermeup', upload);
app.listen(3000, function(){
    console.log('Yo im on 3000.')
});
