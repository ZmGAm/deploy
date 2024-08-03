
const mongoose = require('mongoose');

const usermodel = mongoose.model('user', {
    username: String,
    email: String,
    phone: String,  
    password: String,
    dateofbirth: String,
    type:String,
    ID: String,
    date: String,
});

module.exports = usermodel
usermodel.create({
    username : 'DMIN',
    email: 'Munaeeer@gmail.com',
    password: 'pass123',
    phone: '0307145600',
    dateofbirth:'0001-03-04',
    type:'unknown',
    ID:'unknown',
    date: new Date(),
})