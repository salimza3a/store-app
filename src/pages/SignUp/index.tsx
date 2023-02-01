import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import { CustomTextField } from "../../utilities/CustomTextField";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormInputs } from "../../types/GlobalTypes";
import { useForm } from "react-hook-form";
import { signUpSchema } from "../../yupschema";
import { toast } from "react-toastify";
const theme = createTheme();

export default function SignUp() {
  const { handleSubmit, reset, control } = useForm<FormInputs>({
    defaultValues: {
      firstName: "",
      lastName: "",
      username: "",
      password: "",
    },
    resolver: yupResolver(signUpSchema),
  });
  const navigate = useNavigate();
  const onSubmit = (data: FormInputs) => {
    toast.success(`Registered successfully`, {
      autoClose: 1550,
    });
    navigate("/signin");

    reset();
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }} />
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <CustomTextField
                  name="firstName"
                  control={control}
                  label="First Name"
                  type="text"
                  placeholder="Enter your name..."
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CustomTextField
                  control={control}
                  type="text"
                  label="Last Name"
                  name="lastName"
                  placeholder="Enter your last name..."
                />
              </Grid>
              <Grid item xs={12}>
                <CustomTextField
                  label="Username "
                  name="username"
                  type="text"
                  control={control}
                  placeholder="Enter your username..."
                />
              </Grid>
              <Grid item xs={12}>
                <CustomTextField
                  name="password"
                  label="Password"
                  control={control}
                  type="password"
                  placeholder="Enter your password..."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item>
                <Link to="/signin">Already have an account? Sign in</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
