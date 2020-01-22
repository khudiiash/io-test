import React from "react";
import "./LoginForm.scss";
import arrow from "../../assets/arrow.svg";
import { Link } from 'react-router-dom'
import {useSpring, animated } from 'react-spring'
import * as easings from 'd3-ease'

function LoginForm({ 
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
}) {
  const moveHeading = useSpring({
    to: {transform: 'translateY(0)'},
    from: {transform: 'translateY(-100px)'},
    config: { duration: 900, easing: easings.easeLinear}
  })
  const moveSubheading= useSpring({
    to: {transform: 'translateY(0)'},
    from: {transform: 'translateY(-40px)'},
    config: { duration: 300, easing: easings.easeLinear}
  })
  const moveButton = useSpring({
    to: {transform: 'translateX(0)'},
    from: {transform: 'translateX(150px)'},
    config: { duration: 1500, easing: easings.easeElastic}
  })
  return (
    <div className="login-form">
        <div  style={moveHeading} className='login-form__text'>
          <animated.h2 style={moveHeading} className="heading">Welcome back</animated.h2>
          <animated.p style={moveSubheading} className="subheading">
            Sign in to continue to IO Technologies.
          </animated.p>
        </div>
        <div className="login-form__content">
        <form className="form" onSubmit={handleSubmit}>
          <div className='row'>
          <input
            className={`${errors.email && touched.email && 'error'}`}
            type="email"
            name='email'
            placeholder="Your email"           
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          ></input>
           {errors.email && touched.email && (
            <div className="feedback">{errors.email}</div>
          )}
          </div>
          <div className='row'>
          <input
            name='password'
            type="password"
            placeholder="Password"
            onChange={handleChange}
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${errors.password && touched.password && 'error'}`}
          ></input>
          {errors.password && touched.password && (
            <div className="feedback shown">{errors.password}</div>
          )}
          </div>
          {errors
          ?  (<animated.button style={moveButton} className="submit-btn">
                 LOG IN
                <img className="arrow" src={arrow}></img>
             </animated.button>
            )
          : (
            <animated.button style={moveButton} type="submit" className="submit-btn">
                LOG IN
                <img className="arrow" src={arrow}></img>
            </animated.button>
            )
          }
          
        </form>
        <div className="login-form__reset">
          <p className="login-form__reset-text">Forgot your password?</p>
          <Link to='/reset' className="login-form__reset-link">
            Reset
          </Link>
        </div>
        </div>
      
    </div>
  );
}

export default LoginForm;
