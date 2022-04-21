// import React from 'react'
// import { Container, Row, Col } from 'react-bootstrap';
// import classes from './reigster.module.css'
// import { useFormik } from 'formik';
// import * as yup from 'yup';
// import { AiOutlineInfoCircle } from "react-icons/ai";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { Link } from "react-router-dom";

// function Reigster() {

//   const initialValues = {
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     password: '',
//     confirmPassword: '',
//   };
//   const validationSchema = yup.object({
//     firstName: yup.string().max(15, 'must be 15 characters or less').required('required'),
//     lastName: yup.string().max(15, 'must be more than 15 characters').required('required'),
//     email: yup.string().email('email is invalid ').required('required'),
//     phone: yup.string().max(11, 'in valid phone').required('required'),
//     password: yup.string().min(6, 'must be at least 6 characters').required('password is required'),
//     confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'password not match').required('confirm password is required'),

//   });
//   const registerUser = () => {  
//     // e.preventDefault()
//     try {
//       createUserWithEmailAndPassword(auth,formik.values.email,formik.values.password)
//     } catch (error) {
//       console.log(error)
//     }
//   }
//   const onSubmit = (values, { resetForm }) => {
//     resetForm({ values: '' });
//   };

//   const formik = useFormik({
//     onSubmit,
//     initialValues,
//     validationSchema,
//     registerUser
//   });

//   const auth = getAuth();

//   // createUserWithEmailAndPassword(auth(), formik.values.email, formik.values.password)
//   //   .then((userCredential) => {
//   //     // Signed in 
//   //     const user = userCredential.user;
//   //     // ...
//   //   })
//   //   .catch((error) => {
//   //     const errorCode = error.code;
//   //     const errorMessage = error.message;
//   //     // ..
//   //   });

  
  
 


//   return (
//     <div className={classes.register}>
//       <Container>
//         <Row>
//           <Col md={12} lg={6}>
//             <form className={classes.form_register} autoComplete="off" onSubmit={formik.handleSubmit}>
//               <div >
//                 <label htmlFor="firstName">First Name</label>
//                 <input
//                   type="text"
//                   placeholder='First Name'
//                   id='firstName'
//                   onChange={formik.handleChange} value={formik.values.firstName}
//                   onBlur={formik.handleBlur}
//                   className={formik.touched.firstName && formik.errors.firstName ? classes.active : null}
//                 />
//                 {
//                   formik.touched.firstName && formik.errors.firstName && <AiOutlineInfoCircle className={classes.opps} />
//                 }
//                 {formik.touched.firstName && formik.errors.firstName && (<p>{formik.errors.firstName} </p>)}
//               </div>

//               <div>
//                 <label htmlFor="lastName">Last Name</label>
//                 <input
//                   type="text"
//                   placeholder='Last Name'
//                   id='lastName'
//                   onChange={formik.handleChange} value={formik.values.lastName}
//                   onBlur={formik.handleBlur}
//                   className={formik.touched.lastName && formik.errors.lastName && classes.active}
//                 />
//                 {
//                   formik.touched.lastName && formik.errors.lastName && (<AiOutlineInfoCircle className={classes.opps} />, (<p>{formik.errors.lastName} </p>))
//                 }
//               </div>

//               <div>
//                 <label htmlFor="email">Email</label>
//                 <input
//                   type="email"
//                   placeholder='Email'
//                   id='email'
//                   onChange={formik.handleChange} value={formik.values.email}
//                   onBlur={formik.handleBlur}
//                   className={formik.touched.email && formik.errors.email && classes.active}
//                 />
//                 {
//                   formik.touched.email && formik.errors.email && (<AiOutlineInfoCircle className={classes.opps} />, (<p>{formik.errors.email} </p>))
//                 }
//               </div>

//               <div>
//                 <label htmlFor="phone">Phone</label>
//                 <input
//                   type="tel"
//                   placeholder='Phone'
//                   id='phone'
//                   onChange={formik.handleChange} value={formik.values.phone}
//                   onBlur={formik.handleBlur}
//                   className={formik.touched.phone && formik.errors.phone ? classes.active : null}
//                 />
//                 {
//                   formik.touched.phone && formik.errors.phone && (<AiOutlineInfoCircle className={classes.opps} />, (<p>{formik.errors.phone} </p>))
//                 }
//               </div>

//               <div>
//                 <label htmlFor="password">Password</label>
//                 <input
//                   type="password"
//                   placeholder='Password'
//                   id='password'
//                   onChange={formik.handleChange} value={formik.values.password}
//                   onBlur={formik.handleBlur}
//                   className={formik.touched.password && formik.errors.password ? classes.active : null}
//                 />
//                 {
//                   formik.touched.password && formik.errors.password && (<AiOutlineInfoCircle className={classes.opps} />, (<p>{formik.errors.password} </p>))
//                 }
//               </div>
//               <div>
//                 <label htmlFor="confirmPassword">Confirm Password</label>
//                 <input
//                   type="password"
//                   placeholder='Confirm Password'
//                   id='confirmPassword'
//                   onChange={formik.handleChange} value={formik.values.confirmPassword}
//                   className={formik.touched.confirmPassword && formik.errors.confirmPassword ? classes.active : null}
//                 />
//                 {
//                   formik.touched.confirmPassword && formik.errors.confirmPassword && (<AiOutlineInfoCircle className={classes.opps} />, (<p>{formik.errors.confirmPassword} </p>))
//                 }
//               </div>
//               <div>
//                 <button 
//                 className={classes.form_register_submit} 
//                 // type="submit" onClick={registerUser}
//                 >Register</button>
//               </div>
//             </form>

//           </Col>
//           <Col md={12} lg={6}>
//             <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_xth8zof5.json"
//               background="transparent"
//               speed="2"
//               style={{ width: "400px", height: "400px" }} loop autoplay></lottie-player>
//                     <Link to={'/login'}>go to login</Link>
//           </Col>
//         </Row>
//       </Container>

//     </div>
//   )
// }

// export default Reigster