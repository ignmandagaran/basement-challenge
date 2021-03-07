import React, { useEffect } from 'react';
import { Field, Form, Formik } from 'formik';
import styled from 'styled-components';
import { rem } from 'polished';
import * as Yup from 'yup';
import Button from 'components/Button';
import Input from 'components/Input';
import Text from 'components/Text';

export const SubmitButton = styled(Button)`
  width: 100%;
  margin-top: ${rem('24px')};
`;

const SignupForm = () => {

  useEffect(() => {
    const registeredUsers = localStorage.getItem('Users');
    !registeredUsers && localStorage.setItem('Users', JSON.stringify([]));
  }, []);

  return (
    <Formik
      initialStatus={{ registeredUser: false, success: false }}
      initialValues={{email: '', password: '', confirmPassword: ''
      }}
      validationSchema={Yup.object().shape({
          email: Yup.string()
              .email('Email is invalid')
              .required('Email is required'),
          password: Yup.string()
              .min(6, 'Password must be at least 6 characters')
              .required('Password is required')
              .matches(/^(?=.*\d)/, 'Password must include at least one number')
              .matches(/(?=.*[a-z])/, 'Password must include at least one lowercase letter')
              .matches(/(?=.*[A-Z])/, 'Password must include at least one uppercase letter'),
          confirmPassword: Yup.string()
              .oneOf([Yup.ref('password'), null], 'Passwords do not match')
              .required('Confirm Password is required')
      })}
      onSubmit={(fields, { setSubmitting, setStatus, resetForm }) => {
          const newUser = { email: fields.email, password: fields.password };
          const registeredUsers = localStorage.getItem('Users');

          const userArray =
            registeredUsers && registeredUsers.length && JSON.parse(registeredUsers);

          const isRegisteredUser = userArray.find(
            (user: { email: string; password: string }) => user.email === newUser.email
          );

          setTimeout(() => {
            if (isRegisteredUser) {
              setStatus({ registeredUser: true });
            } else {
              userArray.push(newUser);
              localStorage.setItem('Users', JSON.stringify(userArray));
              resetForm({});
              setStatus({ success: true });
            }

            setSubmitting(false);
          }, 500);
      }}
      >
      {({ touched, errors, status, setStatus, handleChange, isSubmitting }) => (
        <>
          <Form>
              <Field 
                  as={Input}
                  label="Email address"
                  id="email"
                  name="email"
                  type="email"
                  onChange={(e: Event) => {
                    setStatus('');
                    handleChange(e);
                  }}
                  autoComplete="username"
                  error={touched.email && errors.email}
                   />
              <Field
                as={Input}
                label="Passsword"
                id="password"
                name="password"
                type="password"
                onChange={(e: Event) => {
                  setStatus('');
                  handleChange(e);
                }}
                autocomplete="off"
                error={touched.password && errors.password}
              />
              <Field
                as={Input}
                label="Confirm Passsword"
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                onChange={(e: Event) => {
                  setStatus('');
                  handleChange(e);
                }}
                autocomplete="off"
                error={touched.confirmPassword && errors.confirmPassword}
              />
              <SubmitButton aria-label="Sign up" type="submit" disabled={isSubmitting}>
                Sign Up
              </SubmitButton>
          </Form>
          {status?.success && (
            <Text margin="10px 0">
              You're done here! Check your mailbox to complete your registration.
            </Text>
          )}
          {status?.registeredUser && (
              <Text margin="10px 0">
                Hmm... looks like you already have an account.
              </Text>
            )}
        </>
      )}
  </Formik>
  )
}

export default SignupForm;