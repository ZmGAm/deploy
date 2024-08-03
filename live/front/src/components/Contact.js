import React from 'react';
import  {use ,useState}  from 'react';

// import  car  from './cars_content';
// import './cars_content';
// import { object } from 'yup';
const cars_content = [
  { carname: "gamer",id: "car",chasee: "2343",},
];//   // Other valid objects can be added here
// ];

function Contact () {
  const [property, setPoperty] = useState(cars_content);
  // if(!cars_content){
  //    return "car content not fetch";
  // }
  // const[data,setData]=useState([]);
  // setData(cars_content);

  // const car=cars_content;
  console.log("car content is here",property);
    // setData{{}};
    return <>
  {/* < cars carname={property.carname}/> */}
    
     {
      Object.values(property).map((index)=>{

       return <>
        
        <div><p1>{index.carname }</p1></div>
        <div><p1>{index.id }</p1></div>
        <div><p1>{index.chasee }</p1></div>

      </>

      
     }) 


     }

    

      </>
};
  
export default Contact;