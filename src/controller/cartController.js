const cartSchema = require("../models/cartSchema")


const createCart = async (req, res)=>{
 const {title, description} = req.body
 console.log(title, description)

 const cart = await new cartSchema({
    title,
    description
 })

 cart.save()
 res.json(cart)



}
const getCart = async (req, res)=>{
    const getAllCart = await cartSchema.find({})
    res.send(getAllCart);
}

module.exports = {createCart, getCart}