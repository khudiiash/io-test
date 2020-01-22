import React from 'react';
import { LoginForm as LoginFormBase } from '../components'
import { Formik } from 'formik'


const LoginForm = ({ history }) => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log("Logging in", values);
          setSubmitting(false);
          history.push('/dashboard')
        }, 500);
      }}
      validate={values => {
        let errors = {};
        if (!values.email) {
          errors.email = "Please, provide your email address";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = "Oops! You entered an invalid email";
        }

        const passwordRegex = /(?=.*[0-9])/;
        if (!values.password) {
          errors.password = "Please, enter your password";
        } else if (values.password.length < 8) {
          errors.password = "Password must include at least 8 characters";
        } else if (!passwordRegex.test(values.password)) {
          errors.password = "Password must contain at least one number";
        }

        return errors;
      }}

    >{props => (<LoginFormBase {...props} />)}

    </Formik>
  )
}

export default LoginForm;