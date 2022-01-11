var mongoose = require('mongoose')
require('mongoose-double')(mongoose);

const productSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    sku: {
        type: Number,
        required: true
    },
    price: {
        type: mongoose.Schema.Types.Double,
        required: true
    },
    imageUrl: {
        type: String,
        required: true,
    },
    countInStock: {
        type: Number,
        required: true
    }
})

const Product = mongoose.model('product', productSchema);

module.exports = Product;