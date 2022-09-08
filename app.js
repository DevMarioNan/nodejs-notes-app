const express = require('express');
const mongoose = require('mongoose');
const Note = require('./models/note');
const router = require('./routes/router')
const path = require('path');

const PORT = process.env.PORT || 3000  ;

const dbURL = 'mongodb+srv://mario_nan:01023090014@nodetest.vseduop.mongodb.net/Notes_app?retryWrites=true&w=majority';
//starting the app
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//handling view engine 
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));

//connecting to the database
mongoose.connect(dbURL,{ useNewUrlParser: true, useUnifiedTopology: true },()=>{
    app.listen(PORT);
});



//handling routing
app.use(router);
