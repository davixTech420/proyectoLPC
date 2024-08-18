import { useState } from "react";
import HeaderPublic from "../../partials/HeaderPublic";
import FooterPublic from "../../partials/FooterPublic";
import { Box, Grid, TextField, Button,Alert } from "@mui/material";
import Logo from "../../../images/lpc.webp";

export default function Contact() {
  const [openAlert,setOpenAlert] =  useState(false);
  return (
    <>
      <HeaderPublic />
      <Box sx={{ flexGrow: 1 }}>
      {openAlert && (
  <center><Alert severity="error" sx={{fontSize:22 , marginInline:5,marginTop:5}}>
    No Se Encuentran Resultados
  </Alert></center>
)}
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: { xs: "50vh", md: "100vh" },
              order: { xs: 1, md: 2 },
            }}
          >
            <img
              src={Logo}
              alt="Imagen"
              style={{
                maxWidth: "110%",
                maxHeight: "110%",
                transform: "rotate(-15deg)",
                marginTop: "50px",
              }}
            />
          </Grid>

          {/* aca va el codigo del formulario del contaco para el cliente hacia el admin */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: { xs: "50vh", md: "100vh" },
              order: { xs: 2, md: 1 },
            }}
          >
            {/* fromulario de contactanos */}
            <Box component="form" noValidate sx={{ mt: 3, marginInline: 5 }}>
              <Grid container spacing={1}>
              <center><h1>Envianos Un Mensaje</h1></center>
        
                
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="identificacion"
                    label="Nombre"
                    name="identificacion"
                    autoComplete="family-name"
                    variant="filled"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
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
                    name="password"
                    label="Mensaje"
                    type="text"
                    id="password"
                    autoComplete="new-password"
                    variant="filled"
                  />
                </Grid>
                <Grid item xs={12}></Grid>
              </Grid>
              <Button
              onClick={() => setOpenAlert(true)}
                fullWidth
                variant="contained"
                sx={{ mt: 0, mb: 1.5, backgroundColor: "red" }}
              >
                Enviar Por Correo
              </Button>
              <Button
                onClick={() => setOpenAlert(true)}
                fullWidth
                variant="contained"
                sx={{ mt: 0, mb: 1.5, backgroundColor: "green" }}
              >
                Enviar Por WhatsApp
              </Button>
              <Button
                onClick={() => setOpenAlert(true)}
                fullWidth
                variant="contained"
                sx={{ mt: 0, mb: 0, backgroundColor: "black" }}
              >
                Sign Up
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <FooterPublic />
    </>
  );
}
