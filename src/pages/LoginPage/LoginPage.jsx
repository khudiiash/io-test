import React from "react";
import "./LoginPage.scss";
import logo from '../../assets/logo.svg'
import { ResetForm, LoginForm } from "../../containers";
import { Dashboard } from '../../components'

import {useSpring, animated } from 'react-spring'
import * as easings from 'd3-ease'

let sampleProjects = {
  flirchi: {
      title: 'Flirchi'
  },
  io: {
      title: 'io'
  },
  companyName: {
      title: 'company name'
  },
  faceNews: {
      title: 'facenews.com'
  },
  bbc: {
      title: 'BBC News'
  },
  react: {
      title: 'Reactive Apps'
  },
  greta: {
      title: 'Greta Thunberg'
  },
}
function LoginPage({reset,dashboard,history}) {
  
  const moveContent = useSpring({
    to: {transform: 'translateX(0)'},
    from: {transform: 'translateX(-300px)'},
    config: { duration: 5000, easing: easings.easeElastic}
  })
  const moveForm = useSpring({
    to: [{marginLeft: '0'},{opacity: 1}],
    from: {marginLeft: '100px', opacity: 0},
    config: { duration: 650, easing: easings.easeSinIn}
  })
  const moveRadial = useSpring({
    to: {marginLeft: '0'},
    from: {marginLeft: '-240px'},
    config: { duration: 850,  easing: easings.easeSinIn }
  })

  const invertBackground = shouldInvert => {
    let radial = document.getElementById('radial')
    let blue = document.getElementById('blue-filter')
    if (shouldInvert) {
      radial.style['-webkit-filter'] = "invert(100%)"
      radial.style.filter = "invert(100%)"
      blue.style['-webkit-filter'] = "invert(100%)"
      blue.style.filter = "invert(100%)"
    } else {
      radial.style['-webkit-filter'] = "invert(0%)"
      radial.style.filter = "invert(0%)"
      blue.style['-webkit-filter'] = "invert(0%)"
      blue.style.filter = "invert(0%)"
    }
  }
  return (
    <div className="login-page">
      <animated.div style={moveRadial} className="login-page__gradient">
        <div className="login-page__gradient-radial" id='radial'></div>
        <div className="login-page__gradient-blue-filter" id='blue-filter'></div>
        <animated.div style={moveContent} className="login-page__gradient__content">
            <div className="login-page__gradient__content-logo">
               <img src={logo}></img>
               <p>Technologies</p>
            </div>
        <p className='login-page__gradient__content-text'>Get how-to help and instructions or specific features in</p>
        <div className='login-page__gradient__content-buttons'>
            <button onMouseOver={() => invertBackground(true)} onMouseLeave={() => invertBackground(false)}>HELP CENTER</button>
            <p className='login-page__gradient__content-text'>or</p>
            <button onMouseOver={() => invertBackground(true)} onMouseLeave={() => invertBackground(false)}>SUPPORT</button>
        </div>
        </animated.div>
      </animated.div>
      <div className='login-page__blue-background'>
        <div className="login-page__main-content">
        {reset
        ? <ResetForm history={history}/>
        : dashboard
        ? <Dashboard projects={sampleProjects}/> 
        : <LoginForm history={history}/>}
        </div>
       
      </div>
     
    </div>
  );
}

export default LoginPage;
