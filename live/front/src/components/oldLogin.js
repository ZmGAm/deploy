import React from 'react';
import { useFormik } from 'formik'; 
import { LoginSchema } from "./schemas/LoginSchema"
import './design/forms.css';
import './design/images/gmain.jpg';
import Axios from 'axios';

const Login = () => {
    const initialValues ={
        username:"",
        email:"",
        phone:"",
        password:"",
        conformpassword:""
    };

    const posts_data="https://65db334b3ea883a152914d9b.mockapi.io/create-pools";

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: LoginSchema,
        onSubmit: async (values) => {
            
            console.log('Submitting form record:', formik.name);
            const newRecord={...values,id: new Date().getTime().toString()};
            console.log('Submitting form record:', newRecord);
            try {
              console.log('Submitting form data:', newRecord);
              const response = await Axios.post(posts_data, newRecord);
              console.log('API response:', response);
              if (response.status === 201) {
                console.log('Data submitted successfully:', response.data);
                // Handle success (e.g., show a success message)
              } else {
                console.error('API request failed:', response.status);
                // Handle error (e.g., show an error message)
              }
            } catch (error) {
              console.error('Error during API request:', error);
              // Handle error (e.g., show an error message)
            }
          },
          
    });

    return (<> 
        <div className="empty">
            <form className="forms" action="" onSubmit={formik.handleSubmit} > 
                <div className="form-group">
                        <label htmlFor="username">Fullname</label>
                        <input type="text" 
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        autoComplete='off' name="username" id="username" />
                        {formik.touched.username && formik.errors.username ?(<p1 className="formerrors">{formik.errors.username}</p1>):null}
                </div>
                <div className="form-group">
                        <label htmlFor="email">email</label>
                        <input type="email"  
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        autoComplete='off'name="email" id="email" />
                        {formik.touched.email && formik.errors.email ?(<p1 className="formerrors">{formik.errors.email}</p1>):null}
                </div>
                <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input type="text"  
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        autoComplete='off'name="phone" id="phone" />
                        {/* {formik.touched.phone && formik.errors.phone ?(<p1 className="formerrors">{formik.errors.phone}</p1>):null} */}
                </div>
                <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" 
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        autoComplete='off'name="password" id="password" />
                        {formik.touched.password && formik.errors.password ?(<p1 className="formerrors">{formik.errors.password}</p1>):null}
                </div>
                <div className="form-group">
                        <label htmlFor="conformpassword">Confirm Password</label>
                        <input type="password" 
                        value={formik.values.conformpassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        autoComplete='off'name="conformpassword" id="conformpassword" />
                        {formik.touched.conformpassword && formik.errors.conformpassword ?(<p1 className="formerrors">{formik.errors.conformpassword}</p1>):null}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>   
    </> );
};
  
export default Login;
