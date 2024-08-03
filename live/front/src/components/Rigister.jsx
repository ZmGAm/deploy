import React from 'react';
import { useFormik } from 'formik'; 


const Rigister = () => {
    const initialValues ={
        username:"",
        email:"",
        phone:"",
        password:"",
        conformpassword:""
     
    };
   const {Values,handleBlur,handleChange,handleSubmit} = useFormik({
        initialValues:initialValues,
        onSubmit:(Values) => {
            console.log("🚀 ~ Login ~ values:", Values);
        
        },           
        
    });
    // console.log("🚀 ~ Login ~ Formik:", Formik)
    return (<> 
           <h1>gamer</h1>
            <form action="" onSubmit={handleSubmit} > 
                <div>
                        <label htmlFor="username">Fullname</label>
                        <input type="username" 
                        value={Values.username}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        autoComplete='off' name="username" id="username" />
                </div>
                <div>
                        <label htmlFor="email">email</label>
                        <input type="email"  
                        value={Values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        autoComplete='off'name="email" id="email" />
                </div>
                <div>
                        <label htmlFor="phone">Phone</label>
                        <input type="number"  
                        value={Values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        autoComplete='off'name="phone" id="phone" />
                </div>
                <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" 
                        value={Values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                         autoComplete='off'name="password" id="password" />
                </div>
                <div>
                        <label htmlFor="conformpassword">conformPassword</label>
                        <input type="password" 
                        value={Values.conformpassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                         autoComplete='off'name="conformpassword" id="conformpassword" />
                </div>
                <button>submmit</button>
            </form>
            <div>
                {
                    
                    // data.map((curElem)=>{
                    //     const {id,username,email,phone,password}=curElem;
                    //     return( 
                            
                    //         <div>
                    //             <p>{username}</p>
                    //             <p>{email}</p>
                    //             <p>{phone}</p>
                    //             <p>{password}</p>
                    //         </div>
                    //     )
                    // })
                }
            </div>

</> );
};
  
export default Rigister;