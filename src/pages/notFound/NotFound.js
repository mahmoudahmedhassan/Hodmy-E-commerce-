import React from 'react';
import classes from './notFound.module.css';
import { Link } from "react-router-dom";


function NotFound() {
  return (

    <div className ={classes.notFound}>
      <div>
         <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_suhe7qtm.json"  
      speed="1"
      background="transparent"
      style={{ width: "400px%", height: "400px" }} loop autoplay>
  
      </lottie-player>
      </div>
       
      <Link to="/" className={classes.go_home} >Return to home page</Link>
    </div>
      )
}

export default NotFound