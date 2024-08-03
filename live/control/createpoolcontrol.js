const createpoolmodel = require('../models/createpoolmodel')
const jwt = require('jsonwebtoken')
module.exports.createpool = async (req, res) => {

    const { destination,source, Name, Model,seats,transmission,rent,time,ID,date } = req.body
    const idExists = await createpoolmodel.findOne({ ID: ID })

    
    if (idExists) {
        if (idExists.destination.adress === destination.adress&&idExists.source.adress===source.adress) {
            return res.send({ code: 400, message: ' pool is already created by same user ' })
        }
        else{

            return res.send({ code: 300, message: 'you cannot create more pool just add new vehical details' })
        }
        
        
    } else {
        const _res = await createpoolmodel.create({ destination,source, Name, Model,seats,transmission,rent,time,ID,date })
        if (_res) {
        
            return res.send({ code: 300, message: 'pool is created sucessfully ' })
        } else {
            return res.send({ code: 500, message: 'Service error' })
        }

       
    }
}
module.exports.getpool = async (req, res) => {
    const _data = await createpoolmodel.findOne({  })
    if (_data) {
        return res.send({ code: 200, message: 'success', data: _data })
    } else {
        return res.send({ code: 500, message: 'Service error' })
    }
}