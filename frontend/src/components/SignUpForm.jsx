import { Box, Button, PasswordInput, Select, Stack, Text, TextInput } from '@mantine/core';
import { useFormik } from 'formik';
import * as Yup from "yup";

import { notifications } from '@mantine/notifications';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { signUp } from '../features/auth';
const SingUpForm = () => {
  const nav = useNavigate();
  const [loading, setLoading] = useState(false);
  const roles = [
    'editor',
    'author',
  ];

  const signUpSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
    role: Yup.string().required('Role is required'),
  });
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      role: '',
    },
    onSubmit: async (val) => {
      setLoading(true);

      try {
        const response = await signUp(
          val.email,
          val.password,
          val.role,
        );
        console.log(response)

        notifications.show({
          title: response.status,
          message: "Signed up  successfully!",
          color: 'green',
          autoClose: 3000,
          position: 'top-right',
        })
        nav('/login')
      } catch (err) {
        notifications.show({
          title: err.status,
          message: err.message,
          color: 'red',
          autoClose: 3000,
          position: 'top-right',
        })
      }
      finally {
        setLoading(false);
      }


    },
    validationSchema: signUpSchema
  });

  return (

    <form onSubmit={formik.handleSubmit}>
      <Stack>
        <Box>
          <TextInput
            name='email'
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && formik.errors.email}
          />

        </Box>
        <Box>
          <PasswordInput
            name='password'
            label="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && formik.errors.password}
          />
        </Box>
        <Box>
          <Select
            label="Role"
            placeholder="Choose a role"
            data={roles}
            name='role'
            value={formik.values.role}
            onChange={(value) => formik.setFieldValue('role', value)}
            onBlur={formik.handleBlur}
            error={formik.touched.role && formik.errors.role}
          />
        </Box>
        <Button type='submit'
          loaderProps={loading}
          disabled={loading}
        >Sign Up</Button>
      </Stack>
    </form>

  )
}

export default SingUpForm
