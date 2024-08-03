// "use Client"
import React from 'react';
import { useContext,useState ,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from './Context/LoginContext';
// import{TypeContext}from "./Context/TypeContext";
import "./design/signup.css"
const Login = () => {
  const direct = useNavigate();
  const preset_key="cars-pics";
  const [errorforform,setErrorforfrom]=useState({});
  
  const {login,updateLogin }=useContext(LoginContext); 
  
  const [isSubmit, setIsSubmit] = useState(false);
  const [image, setImage] = useState();
  // const [cdata, setCdata] = useState(null);
  const [cdata, setCdata] = useState('');
    const [userRegistration,setUserRegistration]=useState({
        email:"",
        password:"",
    });

    // const posts_data="https://65db334b3ea883a152914d9b.mockapi.io/create-pools";
    // const posts_data="https://car-pooling-761a7-default-rtdb.firebaseio.com/car-poolingfrom.json";
    // const posts_data="https://65db334b3ea883a152914d9b.mockapi.io/create-pools";
    // const posts_data="https://console.firebase.google.com/project/car-pooling-761a7/database/car-pooling-761a7-default-rtdb/data";

    
    // const posts_data="https://localhost:27017/car_pooling/user";
    const posts_data=`${window.location.origin}/user/login`;
    const posts_pic="https://api.cloudinary.com/v1_1//dogabixdo/image/upload";
    
    // const [records,setRecords] =useState ([]); 
    const inputvalid= (e)=>{
        const name=e.target.name;
        const value=e.target.value;
        // const file=e.target.files[0];
        // console.log(name,value);

        // setUserRegistration({...userRegistration,[name]:value});
        if (userRegistration) {
          setUserRegistration({ ...userRegistration, [name]: value });
          // setFilen(file);
        } else {
          console.error("userRegistration is null"); // Handle the case where userRegistration is not yet initialized
        }
        // setImage({...image,[name]:value});
        //  setFilen(file);
    }
    // const submmit =(e)=>{
    //     e.preventDefault();
    //     const newRecord={...userRegistration,id: new Date().getTime().toString()};
    //     // const picture={...image,id: new Date().getTime().toString()};
       
    //     // console.log(records);
    //     // setRecords({...records,newRecord});
    //     setError(validate(userRegistration))
        
    //     setIsSubmit(true);
    //     console.log(newRecord);
        
    //     // console.log(picture);
        
        
    //     // setUserRegistration({username:"",email:"",phone:"",password:""});
    //     // const dataArray = records.data || [];
    //     // const formData =new FormData();
    //     // formData.append('file',filen);
    //     // formData.append('upload_preset',preset_key);
    //     // Axios.post("https://car-pooling-761a7-default-rtdb.firebaseio.com/car-poolingfrom.json",newRecord)
    //     // .then(res=>setImage(res.data.secure_url))
    //     // .then(res=>console.log(res.data))
    //     // .catch(err=>console.log(err))
    //     try {
    //       // Make an API request to post form data
    //       const response =  Axios.post(posts_data,  newRecord);
          
    //       if (response.status === 201) {
    //         console.log('Data submitted successfully:', response.data);
    //         // Handle success (e.g., show a success message)
    //       } else {
    //         console.error('API request failed:', response.status);
    //         // Handle error (e.g., show an error message)
    //       }
    //     } catch (error) {
    //       console.error('Error during API request:', error);
    //       // Handle error (e.g., show an error message)
    //     }
    //   };
      
      // const postimage=async(picture)=>{
      //     const tasveer =new FormData();
      //     tasveer.append("file",image);
      //     tasveer.append("upload_preset","cars-pics");
      //     // tasveer.append("cloud_name","dogabixdo");
      //     const result =await Axios.post("https://api.cloudinary.com/v1_1//dogabixdo/image/upload",tasveer)
      //     .then(res=>console.log(res))
      //     .catch(err=>console.log(err));
      //     // console.log("use tasveer" ,result.tasveer);
      //     // console.log("use tasveer" ,result.tasveer);
        
      //     // setData(result.ima);


      //   }
      //   useEffect(()=>{
        
      //     postimage();

      //   },[]);
       
      const submmit = async (e) => {
        e.preventDefault();
        // const newRecord = { ...userRegistration, id: new Date().getTime().toString() };
      
        // Validate user input (assuming you have a validate function)
        setErrorforfrom(validate(userRegistration));
        setIsSubmit(true);
            
      
        
      };
    
     const chechk_data= async (e)=> {

        
          // Make an API request to post form data
          // const response = await Axios.post(posts_data, newRecord);
          try{
          const response = await fetch(posts_data,{
            method:'POST',
            body:JSON.stringify(userRegistration),
            headers:{
              'Content-Type':'application/json'
            }
          });
          const data= await response.json();
     
          if(data){
            setCdata(data)
            localStorage.setItem("login",data)
           
            updateLogin(data);
            // updateType(data.type);
            // console.log("response ",setCoin.code);
            // console.log("response 2 ",data.code);
            // console.log("data ",data);
            // console.log("get data ",localStorage.getItem("data"));
            // console.log("cdata ",cdata);
            // console.log("coin ",coin);
            // console.log("type ",typeof setCoin); 
            // console.log("token",data.token);
            // localStorage.setItem('token', data.token)
            // localStorage.setItem('token', data.token)
            // console.log("data tokrn  ",setCoin.token);
            // console.log("Accesstoken ",data.token);
            // console.log("Accesstoken ",{token});
            console.log("login IN LOGIN",login);
           
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
        if(cdata.code===1000){
          if(cdata.type==="Owner"||cdata.type==="Driver"){
            setTimeout(()=>{
  
              direct("/Pool_c")
            },2000)
          }
          if(cdata.type==="Passenger"){
            setTimeout(()=>{
  
              direct("/")
            },2000)
          }
        }
      },[cdata])
      // console.log("token in login ",token);
      useEffect(()=>{
        localStorage.setItem('login',JSON.stringify(login));
      },[login])
      useEffect(()=>{
          
        // console.log("errorforform",errorforform);
        if(Object.keys(errorforform).length===0 && isSubmit){
          // console.log("user",userRegistration);
          chechk_data();
          
        }
      },[errorforform]);
      const validate = (values) => {
          const errors = {};
          const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
          if (!values.email) {
            errors.email = "Email is required!";
          } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
          }
          
          if (!values.password) {
            errors.password = "Password is required";
          } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
          } else if (values.password.length > 10) {
            errors.password = "Password cannot exceed more than 10 characters";
          }
          return errors;
        };

    
    return <> 
    <div className='Container' style={{  display:"flex",alignItems: "center",justifyContent:"center", width: "100hv",
  height: "900PX"}}>
            <div className='farm'>
                          <form  className="form" action="" onSubmit={submmit} > 
                          <div className='text' style={{textDecoration:"underline overline"}}>Login</div>
                              <div className="form-group">
                                  <label htmlFor="email" className="form-label">Email</label>
                                  <input type="email"  value={userRegistration.email}
                                  onChange={inputvalid}
                                  autoComplete='off'name="email" id="email" placeholder='      enter your email' />
                                  <p1 className="formerrors">{errorforform.email}</p1>
                              </div>
                              <div className="form-group">
                                      <label htmlFor="password" class="form-label" >Password</label>
                                      <input type="password" value={userRegistration.password}
                                      onChange={inputvalid}
                                      autoComplete='off'name="password" id="password" placeholder='      enter your password'/>
                                      <p1 className="formerrors">{errorforform.password}</p1>
                              </div>
                              
                              {/* <button>submmit</button> */}
                              <button type="submmit" class="btn btn-primary">submmit</button>
                              <p>{cdata.message}</p>
                          </form>
                          
                    </div>

            </div>

</>
      
};
  
export default Login;