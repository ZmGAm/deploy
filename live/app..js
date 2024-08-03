'use server'
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const cors = require('cors')
const usercontrol = require('./control/usercontrol')
const  createpoolcontrol  = require('./control/createpoolcontrol');
const  userview  = require('./view/userview');
const poolview= require('./view/poolview')
const path= require("path");
const port = process.env.PORT || 5000; 
const app = express()


app.use(cors(

  // {
  //   origin:[""],
  //   methods:["POST","GET"],
  //   credential:true
  // }
))

app.get("/",(req,res)=>{
  app.use(express.static(path.resolve(__dirname,"front","build")));
  res.sendFile(path.resolve(__dirname,"front","build","index.html"))
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
mongoose.connect("mongodb+srv://muneerzohaib698zz123:zohaib123@carpooling.nurhdzs.mongodb.net/?retryWrites=true&w=majority&appName=Carpooling", {

  useUnifiedTopology: true, // Keep this option
})
.then(() => {
  console.log('DB Connected.');
  // Your other code (routes, models, etc.) can go here
})
.catch((err) => {
  console.error('DB Connection Error:', err);
});


app.post('/user/signup', usercontrol.adduser);
app.post('/user/login', usercontrol.loginuser);
app.post('/user/View', userview.getuser);
app.post('/pool/Pool_c', createpoolcontrol.createpool);
app.post('/pool/Pool_Read', poolview.viewpool);

app.listen(port, () => { 
  console.log(`Backend Running At Port ${port}`)
})  
