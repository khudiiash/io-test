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
    config: { duration: 5000, friction: 55,tension: 50,easing: easings.easeElastic}
  })
  const moveGradient = useSpring({
    to: {marginLeft: '0'},
    from: {marginLeft: '-240px'},
    config: { duration: 950,  easing: easings.easeLinear }
  })
  const moveRadial = useSpring({
    to: {transform: 'translateX(0) translateY(0)'},
    from: {transform: 'translateX(0px) translateY(600px)'},
    config: {mass: 32,friction: 2, tension: 1, easing: easings.easeBounceOut }
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
      <animated.div style={moveGradient} className="login-page__gradient">
        <animated.div style={moveRadial}className="login-page__gradient-radial" id='radial'></animated.div>
        <div className="login-page__gradient-blue-filter" id='blue-filter'></div>
      </animated.div>
      <div className='login-page__blue-background'>
      <animated.div style={moveContent} className="login-page__blue-background__content">
            <div className="login-page__blue-background__content-logo">
               <img src={logo}></img>
               <p>Technologies</p>
            </div>
        <p className='login-page__blue-background__content-text'>Get how-to help and instructions or specific features in</p>
        <div className='login-page__blue-background__content-buttons'>
            <button onMouseOver={() => invertBackground(true)} onMouseLeave={() => invertBackground(false)}>HELP CENTER</button>
            <p className='login-page__blue-background__content-text'>or</p>
            <button onMouseOver={() => invertBackground(true)} onMouseLeave={() => invertBackground(false)}>SUPPORT</button>
        </div>
        </animated.div>
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
