import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Header from "../component/reusable/Header/Header.jsx";
import {
  auth,
  setDoc,
  db,
  doc,
  createUserWithEmailAndPassword,
} from "../config/Firebase.jsx";

import { emailRegex } from "../config/EmailRegex.jsx";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
  
const SignUp = () => { 
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(async (res) => {
        await setDoc(doc(db, "users", res.user.uid), {
          ...data,
          uid: res.user.uid,
        });
        alert("User Created.....");
        navigate("/signin");
        reset();
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <>
    <Header />
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
    <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
      <LockOutlinedIcon />
    </Avatar>
    <Typography component="h1" variant="h5">
      Register Account
    </Typography>
    <Box sx={{ mt: 3 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              {...register("full_name", {
                required: "Please enter a Full Name",
              })}
              error={errors.full_name && true}
              helperText={errors?.full_name?.message}
              autoComplete="given-name"
              name="full_name"
              fullWidth
              id="full_Name"
              label="Full Name"
              autoFocus
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              {...register("email", {
                required: "Please enter a Email",
                pattern: {
                  value: emailRegex,
                  message: "Please enter a valid email address",
                },
              })}
              error={errors.email && true}
              helperText={errors?.email?.message}
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              {...register("password", {
                required: "Please enter a password",
              })}
              error={errors.password && true}
              helperText={errors?.password?.message}
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Register
        </Button>
        <Grid container justifyContent="flex-end">
          <Grid item sx={{

      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}>
            <NavLink to="/login" variant="body2" sx={{ mt: 3, mb: 2 }}>

            Already have an account? Login 
            </NavLink>
          </Grid>
        </Grid>
      </form>
    </Box>
  </Box>
</Container>
    </>
);
};
export default SignUp;