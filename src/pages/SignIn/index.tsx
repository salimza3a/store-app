import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FormInputs } from '../../types/GlobalTypes';
import { CustomTextField } from '../../utilities/CustomTextField';
import { yupResolver } from "@hookform/resolvers/yup";
import axios from 'axios';
import { signInSchema } from '../../yupschema';
export default function SignIn() {
  const { handleSubmit, reset, control } = useForm<FormInputs>({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: yupResolver(signInSchema)
  });
  const onSubmit = async (data: FormInputs) => {
   const res =  await axios.post('https://fakestoreapi.com/auth/login',data)
    localStorage.setItem('token',JSON.stringify(res.data.token))
    reset();
  };

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} />
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
            <CustomTextField
              name="username"
              control={control}
              label="Username"
              type="text"
              placeholder="Enter your username..."
            />
            <CustomTextField
              name="password"
              control={control}
              label="Password"
              type="password"
              placeholder='Enter your password...'
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link to='/signup'>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    );
  }

