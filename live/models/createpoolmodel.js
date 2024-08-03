
const mongoose = require('mongoose');

const createpoolmodel = mongoose.model('Pool', {
    destination: {},
    source: {},
    Name: String,
    Model: String,
    seats: String,
    transmission:String,
    rent:String,
    ID:String,
    time: String,
    date: String,
});

module.exports = createpoolmodel
createpoolmodel.create({
    destination : {},
    source: {},
    Name: 'pass123',
    Model: '0307145600',
    seats:'0001-03-04',
    transmission:'unknown',
    rent:'unknown',
    time:'unknown',
    id:'unknown',
    date: new Date(),
})