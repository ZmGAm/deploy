import React, { useContext, useEffect, useState } from 'react'
import { DestinationContext } from './Context/DestinationContext';
import { SourceContext } from './Context/SourceContext';
const Pool_Read = () => {
  
  const[currentdata,setCurrentData]=useState({});
  const[Rent,setRent]=useState({});
  const[oldRent,setOldRent]=useState({});
  const[selected,setSlected]=useState(1);
  const[Seats,setSeats]=useState({});
 const{destination}=useContext(DestinationContext);
 const{source}=useContext(SourceContext);
useEffect(()=>{
  console.log("view pool destination",destination);
 
},[destination])
useEffect(()=>{
  console.log("view pool source",source);
 
},[source])
const getdata=`${window.location.origin}/pool/Pool_Read`;
  const geteachdata= async (e)=> {
           
    // const user=localStorage.getItem('login');
      // Make an API request to post form data
      // const response = await Axios.post(posts_data, newRecord);
      try{
      const response = await fetch(getdata,{
        method:'POST',
        body:JSON.stringify({source,destination}),
        headers:{
          'Content-Type':'application/json'
        }
      });
      const data= await response.json();
 
      if(data){
        
        setCurrentData(data);
        console.log("data in pool_read",data);
        console.log("current pool_read",currentdata);
        console.log(" data.data pool_read",data.data);
        localStorage.setItem("data",JSON.stringify(data))
        console.log("data in pool_read",data);
        console.log("current pool_read",currentdata);
        console.log("data.location mean pool in read",data.Location.Seats);
        setSeats(data.Location.Seats);
        console.log("seats in pool_read",Seats);
        setOldRent(data.Location.Rent);
        console.log("seats in pool_read",Rent);
      //  if(data.message==="success fully find profile"){
      //   setLoading(true);
      //  }else{
      //   setLoading(false);
      //  }
      }
  
      if (response.status === 200) {
        console.log('in fornt Data submitted successfully:',response.status ) //response);
        // Handle success (e.g., show a success message)
      } else {
        console.error('API request failed:', response.status);
        // Handle error (e.g., show an error message)
      }
    
   } catch (error) {
      console.error('Error during API request:', error);
      // Handle error (e.g., show an error message)
    }
  }
useEffect(()=>{
  // console.log("view pool");
 geteachdata();
},[destination&&source])
  return <>
   
 
{
    
    Object.values(currentdata).map((item)=>{
      const{Name,Model,transmission,Seats,Rent,Date,Time,destination,source,destinationname,sourcename}=item;
      if(Name){

       return(<>
        <div class="text">  {  currentdata.message}</div>
         <div >

               <div >
                   
                           <div className="pool-data" style={{color:"black"}}>

                             
                               <h30>Drop off Location: {destinationname}  {destination}</h30>
                               <h30>Pickup Location: {sourcename}   {source}</h30>
                               <h30>Name: {Name}</h30>
                               <h30>Model: {Model}</h30>
                               <h30>Transmission: {transmission}</h30>
                               <h30>Rent: {Rent}</h30>
                               <h30>Seats: {Seats}</h30>
                               <h30>Date: {Date}</h30>
                               <h30>Time: {Time}</h30>
                           </div>       
                   </div>
                   {/* <button className='Select' onClick={noofselect} > Select</button> */}
         </div>

            {/* <div className="pool-data" style={{color:"black"}}>

                             
                              
                               <h30>Pickup Location: {Seats}</h30>
                               <h30>oldRent: {oldRent}</h30>
                               <h30>newrent: {Rent}</h30>
                               
                           </div>               */}
     
   </>
   )

      }
      
  })
 

     
}    
  
  </>
}

export default Pool_Read

// (
//   <div style={{ border: "3px solid red",display:"flex",width:"20%",height:"20%"}}>
//     <h2 style={{color:"black"}}> new gamer pool</h2>
//     <h2 style={{color:"black"}}> new gamer pool</h2>
//     <h2 style={{color:"black"}}> new gamer pool</h2>
//     <h2 style={{color:"black"}}> new gamer pool</h2>
//   </div>
// )