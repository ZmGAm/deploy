import React,{useState,useEffect, useContext} from 'react';

import picprofile from './design/images/driver.jpg';
import "./design/pool.css";
import { LoginContext } from './Context/LoginContext';
// import axios from 'axios';

// const getdata="AIzaSyCsHhl2ACcwjgaeVOpFb6eFfbCB3qEGTLM";
const getdata=`${window.location.origin}/user/View`;
const View = () => {
    
    const[currentdata,setCurrentData]=useState({})
    // const[loading,setLoading]=useState(false)
    const{login,updateLogin}=useContext(LoginContext)
    const geteachdata= async (e)=> {
           
      // const user=localStorage.getItem('login');
        // Make an API request to post form data
        // const response = await Axios.post(posts_data, newRecord);
        try{
        const response = await fetch(getdata,{
          method:'POST',
          body:JSON.stringify(login),
          headers:{
            'Content-Type':'application/json'
          }
        });
        const data= await response.json();
   
        if(data){
          
          setCurrentData(data);
          console.log("data in view",data);
          console.log("current data in view",currentdata);
          console.log(" data.data in view",data.data);
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
    // const geteachdata= async()=>{

    //     const result =await axios.get(getdata);
    //     setData(result.data.data);
    //     console.log("data",data);
    // }

        useEffect(()=>{
            console.log("login in view " ,localStorage.getItem('login'));
            geteachdata();
        },[]);
    return <>

    
{
    
       Object.values(currentdata).map((item)=>{
            const{ID,username,password,phone,email}=item;
            if(ID){
              return(<>
                <div className='text' >{currentdata.message}</div>
                <div className='topcontain'>

                      <div className='profile'>
                          <img src={picprofile} alt="loading" style={{width:"100%"}}/>
                                  <div className="pool-data" style={{color:"black"}}>

                                      <h30>ID: {ID}</h30>
                                      <h30>User Name: {username}</h30>
                                      <h30>Email: {email}</h30>
                                      <h30>Pass word: {password}</h30>
                                      <h30>Contact: {phone}</h30>
                              
                                  </div>
                                  
                                  <button className='Edit' > Edit</button>
                                  
                                  
                          </div>
                           
                </div>
                         
            
          </>
          )
            }
           
        })
    
  
        
}    
    </>
   
};
  
export default View;