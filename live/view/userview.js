
const usermodel=require('../models/usermodel.js')
// module.exports.getuser = async (req, res) => {
//     const _data = await usermodel.find({})
//     if (_data) {
//         return res.send({ code: 200, message: 'success', data: _data })
//     } else {
//         return res.send({ code: 500, message: 'Service error' })
//     }
// }
module.exports.getuser = async (req, res) => {

    // const { username, password } = req.body
    const { ID, username } = req.body
    const userExists = await usermodel.findOne({ ID: ID })
    if (userExists) {
            if (userExists.username === username) {
                const _data = await usermodel.find({})
                if (_data) {
                    return res.send({ code: 200, message: 'success fully find profile', data: {ID:userExists.ID,username:userExists.username,email:userExists.email,password:userExists.password,phone:userExists.phone} })
                } else {
                    return res.send({ code: 500, message: 'Service error' })
                }  
        }
    
    } else {
        return res.send({ code: 500, message: 'you cannot view profile  ' })
    }
}