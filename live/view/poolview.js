const createpoolmodel=require('../models/createpoolmodel')
const bodyParser = require('body-parser')
module.exports.getpool = async (req, res) => {
    const _data = await createpoolmodel.findOne({  })
    if (_data) {
        return res.send({ code: 200, message: 'success', data: _data })
    } else {
        return res.send({ code: 500, message: 'Service error' })
    }
}
module.exports.viewpool = async (req, res) => {
 console.log("bcakned recived object",req.body)
 const  {source,destination}  = req.body
 const location = await createpoolmodel.findOne({source:source})
    if (location) {
        // return res.send({ code: 400, message: ' match success fully ', location:{source:location.source,destination:location.destination}})
        // /if (location.destination.adress === destination.adress&&location.source.adress===source.adress){
         const destinationmatch= await createpoolmodel.findOne({destination:destination})
        if (destinationmatch) {
            return res.send({ code: 3000, message: ' available pools ', Location:{Name:location.Name,Model:location.Model,Seats:location.seats,transmission:location.transmission,Rent:location.rent,Time:location.time,Date:location.date,destination:location.destination.adress,source:location.source.adress,destinationname:location.destination.name,sourcename:location.source.name}})
        } 
        else{

            return res.send({ code: 300, message: 'pool is exit but dstination not same' })
        }
    }
        
    else {
       
        
            return res.send({ code: 300, message: 'pools are not available' })

        
       
    }
    
}