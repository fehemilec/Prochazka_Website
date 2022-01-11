const express = require('express');
const router = express.Router();

const {
    getAllProducts, 
    getProductById
} = require('../controller/productControllers');

//@desc GET all products from DB
//@route GET /api/products
router.get('/', getAllProducts);


//@desc GET a products by ID from DB
//@route GET /api/products/:id
router.get('/:id', getProductById);

module.exports = router;