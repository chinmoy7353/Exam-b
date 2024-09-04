const mongoose = require('mongoose');

const dbConection = ()=>{
    mongoose.connect('mongodb+srv://chinmoy7353:chinmoy1996@cluster0.lb7bizn.mongodb.net/exam?retryWrites=true&w=majority')
    .then(() => console.log('Connected!'));
}


module.exports = dbConection
