const usermodel = require('../models/usermodel.js')
const jwt = require('jsonwebtoken')


module.exports.adduser = async (req, res) => {

    const { username,email, password, phone,type,dateofbirth,ID,date } = req.body
    const userExists = await usermodel.findOne({ email: email })
    
    if (userExists) {
        if (userExists.password === password) {
            return res.send({ code: 300, message: ' Email or Password allready taken' })
        }
        // const _token = await jwt.sign({ ...userExists }, 'PRIV_123')
    }  else {
        const _res = await usermodel.create({ username, email, password, phone,type,dateofbirth,ID,date})
        if (_res) {
            const _token = await jwt.sign({ ...userExists }, 'PRIV_123')
            return res.send({ code: 26000, message: 'signup sucessfully '})
        } else {
            return res.send({ code: 500, message: 'Service error' })
        }

    }
}

module.exports.loginuser = async (req, res) => {

    const { email, password } = req.body
    const userExists = await usermodel.findOne({ email: email })
    if (userExists) {
        if (userExists.password !== password) {
            return res.send({ code: 200, message: 'Email or Password wrong.' })
        }
        const _token = await jwt.sign({ ...userExists }, 'PRIV_123')

        return res.send({
            code: 1000,
            message: 'login success',
            token: _token,
            type: userExists.type,
            ID: userExists.ID,
            username: userExists.username
        })
    } else {
        return res.send({ code: 500, message: 'user profile not exit ' })
    }
}