const mongoose = require('mongoose');



const Schema = mongoose.Schema;

const emailLoggerSchema = new Schema({
    level: {
        type: String,
        required: true,
        enum: ['ERROR', 'SUCCESS','WARNING']
    },
    type:{
        type: String,
        required: true,
        enum: ['SEND EMAIL USER API','CREATE DISCOUNT USER API','ADD EMAIL USER API','ADD CONTACT USER API']
    },
    msg:{
        type:String,
        required:true
    },
    user:{
        type: String, 
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('emailLogger', emailLoggerSchema);