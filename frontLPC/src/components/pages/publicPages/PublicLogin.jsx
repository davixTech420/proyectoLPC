
import HeaderPublic from "../../partials/HeaderPublic";
import FooterPublic from "../../partials/FooterPublic";
import { useState } from "react";
import axios from "axios";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from "react-router-dom";
export default function PublicLogin() {
 const nav = useNavigate();
  const[formData,setFormData] = useState({    
    email: "",
    password: "",   
  });
const handleSubmit = async  (e) => {
  e.preventDefault();
  try{
    const regis = await axios.post('http://localhost:3001/api/auth/login', formData);
    console.log(regis.data);
    localStorage.setItem('token', regis.data.token);
    localStorage.setItem('role',regis.data.role);
    switch (regis.data.role) {
      case "admin":
        nav("/admin/dashboard");
        break;
    case "cliente":
      nav("/cliente/dashboard");
      break;
      case "empleado":
        nav("/empleado/dashboard");
        break;
      default:
        nav("/loginPublic")
        break;
    }
  } catch (error) {
    console.log(error);
  }
};

return (
  <>
    <HeaderPublic />
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          width:"100%",
          borderRadius:5,
          boxShadow:"0px 4px 8px black", 
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
          Iniciar Secion
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
          sx={{ mt: 3 ,p:2}}
        >
          <Grid container spacing={2}>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                id="email"
                variant="filled"
                label="Email"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="new-password"
                variant="filled"
              />
            </Grid>
            <Grid item xs={12}>
            </Grid>
          </Grid>
          <Button
            type="submit"
            onClick={handleSubmit}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Container>
    <br />

    <FooterPublic />
  </>
);
};
