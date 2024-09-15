import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "../component/reusable/Header/Header.jsx";
import { NavLink, useNavigate } from "react-router-dom";
import { emailRegex } from "../config/EmailRegex.jsx";
import {
  auth,
  setDoc,
  db,
  doc,
  signInWithEmailAndPassword,
} from "../config/Firebase.jsx";

import { useForm } from "react-hook-form";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        ChatApp
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
      By / @M_S_U_M_A_I_R_
    </Typography>
  );
}
const SignIn = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
signInWithEmailAndPassword(authdata.email, data.password)
      .then((res) => {
        alert("User Logged in Successfully.....", res.user.email);
        navigate("/");
        reset();
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
  
  
   <Container className="w-100vw" component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar><Typography component="h1" variant="h5">
          Login 
        </Typography>


        </Box>
<form onSubmit={handleSubmit(onSubmit)}> 
            <TextField
{...register("email", {
  required: "Please enter a Email",
     pattern: {
     value: emailRegex,
    message: "Please enter a valid email address",
        },  })}
      error={errors.email && true}
   helperText={errors?.email?.message}
              margin="normal"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
        
            <TextField
 {...register("password", { required: "Please enter a password"})}
      error={errors.password && true}
 helperText={errors?.password?.message}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
          </form>
        
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <NavLink to="/" variant="body2">
                  {" "}
                  Don't have an account? Register
                </NavLink>
              </Grid>
            </Grid>
        
        
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
  
  );
};

export default SignIn;
