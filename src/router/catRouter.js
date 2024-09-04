const express = require('express');
const { createCart, getCart } = require('../controller/cartController');

const cartRouter = express.Router();

cartRouter.post('/createcart', createCart);
cartRouter.get('/getAllcart', getCart);


module.exports = {cartRouter}