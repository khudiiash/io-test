import React from "react";
import arrow from "../../assets/arrow.svg";
import { Link } from "react-router-dom";
import "./ResetForm.scss";
import { useSpring, animated } from "react-spring";
import * as easings from "d3-ease";

function ResetForm({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit
}) {
  const moveHeading = useSpring({
    to: { transform: "translateY(0)" },
    from: { transform: "translateY(-100px)" },
    config: { duration: 2000, easing: easings.easeElastic }
  });
  const moveButton = useSpring({
    to: { transform: "translateX(0)" },
    from: { transform: "translateX(150px)" },
    config: { duration: 300, easing: easings.easeLinear }
  });
  const moveArrow = useSpring({
    to: { marginLeft: "0" },
    from: { marginLeft: "400px" },
    config: { duration: 100, easing: easings.easeLinear }
  });
  return (
    <div className="reset-form">
      <Link className="reset-form__back" to="/">
        <animated.img
          style={moveArrow}
          src={arrow}
          className="arrow"
        ></animated.img>
      </Link>
      <animated.h2 style={moveHeading} className="heading">
        Forgot Password?
      </animated.h2>
      <form className="form">
        <div className="row">
          <input
            className={`${errors.email && touched.email && "error"}`}
            type="email"
            name="email"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          ></input>
          {errors.email && touched.email && (
            <div className="feedback">{errors.email}</div>
          )}
        </div>
      </form>
      <animated.button
        style={moveButton}
        type="submit"
        className="submit-btn"
        onClick={handleSubmit}
      >
        Send Me Instructions
      </animated.button>
    </div>
  );
}

export default ResetForm;
