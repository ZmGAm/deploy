import * as Yup from 'yup';

export const LoginSchema = Yup.object({
  username: Yup.string().min(2).max(25).required('Name is required'),
  phone: Yup.number().min(2).max(11).required('Phone is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6).required('Password is required'),
  conformpassword: Yup.string().min(6).required().oneOf([Yup.ref('password'),null],"Password is not match"),
  
}); 
// export default LoginSchema;

// // Inside <Formik>
// <Formik
//   initialValues={{ name: '', email: '' }}
//   validationSchema={validationSchema}
//   onSubmit={(values) => {
//     console.log(values);
//   }}
// >
//   {/* Form fields */}
// </Formik>
