import HeaderPublic from "../../partials/HeaderPublic";
import FooterPublic from "../../partials/FooterPublic";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { FormControl, InputLabel, Select, MenuItem, Alert,Snackbar } from "@mui/material";
import { useState } from "react";
import axios from "axios";

export default function PublicRegis() {
 /* este estado es para guardar y mostrar los mensajes de error o de exito */
 const [openMensaje ,setOpenMensaje] = useState(false);
 /**
  * 
  * 
  */
 /* estos son los datos del fromulario */
    const[formData,setFormData] = useState({
      nombre: "",
      apellido: "",
      tipIdentidad: "",
      identificacion: "",
      telefono: "",
      email: "",
      password: "",
      estado:true,
      role: "admin",
    });
/**
 * 
 * 
 */
  const handleSubmit = async  (e) => {
    e.preventDefault();
    try{
      const regis = await axios.post('http://localhost:3001/api/auth/register', formData);
      console.log(regis.data);
      setOpenMensaje(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
<Snackbar open={openMensaje} autoHideDuration={6000} onClose={() => setOpenMensaje(false)}>
  <Alert
    onClose={  () => setOpenMensaje(false)}
    severity="success"
    variant="filled"
    sx={{ width: '100%' }}
  >
    Usuario Registrado Exitosamente
  </Alert>
</Snackbar> 



      <HeaderPublic />
      <Container component="main" maxWidth="xs">

        {/* este es el contenedor donde va el formulario con sus campos */}
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
            Crear Cuenta
          </Typography>
          <Box
          sx={{  mt:3 , p:3 }}
            component="form"
            noValidate
            onSubmit={handleSubmit}
          
          >
            <Grid container spacing={2} >
              <Grid item xs={12} sm={6}>
                <TextField
                
                  autoComplete="given-name"
                  name="nombre"
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  required
                  fullWidth
                  id="nombre"
                  label="Nombre"
                  autoFocus
                  variant="filled"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
               
                  required
                  fullWidth
                  value={formData.apellido}
                  onChange={(e) => setFormData({ ...formData, apellido: e.target.value })}
                  id="apellido"
                  label="Apellido"
                  name="apellido"
                  autoComplete="family-name"
                  variant="filled"
                />
              </Grid>

              <Grid item xs={12} sm={6} >
                <FormControl
                  variant="filled"
                  sx={{ minWidth: "100%" }}
                >
                  <InputLabel id="demo-simple-select-filled-label">
                    Tipo De Identificacion
                  </InputLabel>
                  <Select
                    value={formData.tipIdentidad}
                    onChange={(e) => setFormData({ ...formData, tipIdentidad: e.target.value })}
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"C.C"}>Cedula Ciudadania</MenuItem>
                    <MenuItem value={"T.I"}>Tarjeta De Identidad</MenuItem>
                    <MenuItem value={"Pasaporte"}>Pasaporte</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
              
                  required
                  fullWidth
                  value={formData.identificacion}
                  onChange={(e) => setFormData({ ...formData, identificacion: e.target.value })}
                  id="identificacion"
                  label="Identificacion"
                  name="identificacion"
                  autoComplete="family-name"
                  variant="filled"
                />
              </Grid>

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
                  value={formData.telefono}
                  onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                  id="telefono"
                  variant="filled"
                  label="Telefono"
                  name="telefono"
                  autoComplete="family-name"
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
            {/* Boton para enviar los datos del formulario */}
            <Button
              type="submit" 
              onClick={handleSubmit}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            {/*--------*/}
          </Box>
        </Box>
      </Container>
      <br />

      <FooterPublic />
    </>
  );
}
