import React from 'react';
import { ResetForm as ResetFormBase } from '../components'
import { Formik } from 'formik'


const ResetForm = ({history}) => (
  <Formik
    initialValues={{ email: "" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Sent instructions to ", values);
        setSubmitting(false);
        history.push('/')
      }, 500);
    }}
    validate={values => {
      let errors = {};
      if (!values.email) {
        errors.email = "Please, provide your email address";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Oops! You entered an invalid email";
      }
      return errors;
    }}
  >{props => (<ResetFormBase {...props} />)}

  </Formik>
)

export default ResetForm;