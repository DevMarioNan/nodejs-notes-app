const express = require('express');
const mongoose = require('mongoose');
const Note = require('../models/note')
const ObjectId = require('mongoose').Types.ObjectId;

const router = express.Router();

router.get('/',(req,res)=>{
    Note.find({},(err,data)=>{
        if(err){
            console.log(err);
        }else{
            res.render('index',{notes:data});
        }
    });
    
    
});

router.get('/:id',(req,res)=>{
    const id = req.params.id;
    Note.findById(new ObjectId(id),(err,data)=>{
        if(err){
            console.log(err);
        }else{
            res.render('detailes',{note:data});
        }
    })
});

router.delete('/:id',(req,res)=>{
    const id = req.params.id;
    
    Note.findByIdAndDelete(new ObjectId(id)).then(()=>{
        res.json({redirect:'/'});
    }).catch((err)=>{
        console.log(err);
    });
})

router.post('/' ,(req,res)=>{
    const note = new Note(req.body);
    note.save().then((result)=>{
        res.redirect('/');
    }).catch((err)=>{
        console.log(err);
    })
})

router.post('/update',(req,res)=>{
    console.log(req.body);
    Note.findByIdAndUpdate(new ObjectId(req.body._id),{content: req.body.content},(err,docs)=>{
        if(err){
            console.log(err);
        }else{
            console.log(docs);
            res.redirect('/');
        }
        
    });
    
})

module.exports = router;