const mongoose = require('mongoose');

const schema = mongoose.Schema;

const noteSchema = new schema({
    content:{
        type: String,
        required: true
    }
});

const noteModule = mongoose.model('Note',noteSchema);
module.exports= noteModule;