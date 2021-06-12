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
    productShipingBadge:{
        type:mongoose.Types.ObjectId,
        ref:'shipingbadge',
    },
    status:{
        type:String,
    },
    recomendedProduct:[
        {
            product:{
                type: mongoose.Types.ObjectId,
                ref: 'product' 
            },
            status:{
                type:String,
                default:'active'
            }
        }
    ],
    price:{
        type:Number,
        required:true
    },
    variant_id:{
        type:String,
        require:true
    }
}, {
    timestamps: true
})



module.exports = mongoose.model('product', productSchema);