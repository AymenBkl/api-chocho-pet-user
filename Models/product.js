const mongoose = require('mongoose');



const Schema = mongoose.Schema;

const productSchema = new Schema({
    productId: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    title:{
        type:String,
        required:true,
        default:''
    },
    productBadge:{
        type:mongoose.Types.ObjectId,
        ref:'badge',
    },
}, {
    timestamps: true
})



module.exports = mongoose.model('product', productSchema);