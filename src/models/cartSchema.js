const mongoose = require('mongoose');
const { Schema } = mongoose;

const cartSchema = new Schema({
    title:{
        type:String,
       
    },
    description:{
        type:String,
       
    },
})

module.exports = mongoose.model("cart", cartSchema)