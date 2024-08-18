import React from "react";
import HeaderPublic from "../../partials/HeaderPublic";
import FooterPublic from "../../partials/FooterPublic";
import { Box, Grid, Button,Card,CardMedia } from "@mui/material";

import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Carousel from "react-material-ui-carousel";
import Mapa from "../component/Map";


/* esta es la vista de inicio */

const items = [
  {
    image:
      "https://img.freepik.com/vector-gratis/cartel-espectaculo-teatro-diseno-plano_23-2149853623.jpg?size=338&ext=jpg",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiE-HjIAnI27Vrkp6EJNdxz73XiU7xOjx3gg&s",
  },
];
export default function Welcome() {
  return (
    <>
      <HeaderPublic />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <br />
          {/*
        ----------
        --------
        --------
        -- este es el contendor del carrusel */}
          <Grid item xs={12} md={15} lg={15}>
            <Carousel
              animation="slide"
              navButtonsAlwaysVisible={true}
              cycleNavigation={true}
              interval={4000}
              duration={500}
              sx={{
                marginInline: 2,
                marginTop: 2,
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                flexWrap: "nowrap",
                height: "80%",
                width: "auto",
                backgroundColor: "white",
              }}
            >
              {items.map((item, index) => (
                <Box
                  key={index}
                  component="div"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    width: "100%",
                  }}
                >
                  <Box
                    component="img"
                    src={item.image}
                    alt={`carousel-item-${index}`}
                    sx={{
                      height: "300px",
                      maxHeight: "300px",
                      maxWidth: "100%",
                      margin: "auto",
                      borderRadius: 2,
                    }}
                  />
                </Box>
              ))}
            </Carousel>
          </Grid>

          {/**----
           * ---
           * --------
           * --
           * ------------- */}

          {/*  <Grid
           direction={{ xs: 'column', sm: 'row' }}
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: { xs: "50vh", md: "100vh" },
              order: { xs: 2, md: 1 },
            }}
          >
          </Grid> */}
            <Grid item xs={12} md={15} lg={15}>
           <center><Typography
 variant="h4" sx={{  width: '100%' }}>
              Proximo Show
            </Typography></center>
            </Grid>
            {/* contenedor de las tarjetas del show con su recpectivo teatro 
            *
            *
            * *
            * **
            * *
            * */}
          <Grid item xs={12} md={15} lg={15}  sx={{borderRadius: 10, flexDirection: { xs: 'column', md: 'row' }, backgroundColor: '#8f3d38', display: "flex", justifyContent: "space-between", alignItems: "center",marginInline: 1,marginLeft:3 }} >
           
       
                <Card
                  sx={{
                    marginInline: 4,
                    borderRadius: 8,
             width: '80%',
             height: '60%',
                    marginTop: 2,
                    marginBottom:2,
                    alignContent: "center",
                  
                  }}
                >
                  <CardContent sx={{ textAlign: "center" }}>
                    <Typography
                      sx={{ textAlign: "center" }}
                      variant="h5"
                      component="div"
                    >
                      Teatro Galan
                    </Typography>
                    <Typography sx={{ whiteSpace: "pre-line" }} variant="body2">
                      {"\n"} Aforo Maximo : 150 {"\n"}
                      Cupos Disponibles : 15 {"\n"}
                      Direccion : Cra 7 #22 - 47 {"\n"}
                      Hora Inicio: 8:00am {"\n"}
                      Hora Final : 11:00am {"\n"}
                    </Typography>
                    <br />
                    <Button
                      onclick={() =>
                        window.open("https://www.tuboleta.com/", "_blank")
                      }
                      sx={{
                        display: "block",
                        width: "100%",
                        maxWidth: "100%",
                        background: "black",
                      }}
                    >
                      Tu Boleta
                    </Button>
                  </CardContent>
                </Card>
             

           
         
                <Card
                  sx={{
                    marginInline: 2,
                    borderRadius: 8,
                    width: "80%",
                    height: "60%",
              
                marginBottom:2,
                  }}
                >
                  <CardMedia
        component="img"
        image="https://via.placeholder.com/300" 
        alt="Imagen de la tarjeta"
        sx={{
          height: '80%', 
          width: '100%',
          objectFit: 'cover',
        }}
      />
      <CardContent
        sx={{
          height: '10%', // 10% de la altura de la tarjeta para el texto
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 1,
        }}
      >
        <Typography variant="h6" component="div" align="center">
          Palabra
        </Typography>
      </CardContent>
                </Card>
              
            

 
          </Grid>
                     {/* 
**
***
*
**
*

aca terminar el contenedor principal de las tarjetas debajo del carrusel */}

<Grid item xs={12} md={15} lg={15}>
           <center><Typography
 variant="h4" sx={{  width: '100%' }}>
              Teatro Ubicado En
            </Typography></center>
            </Grid>
          <Grid
            item
            xs={12}
            md={12}
            lg={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: { xs: "50vh", md: "80vh" },
              order: { xs: 1, md: 2  },
            }}
          >
            {/* este es el componente que hace conexion con la api del mapa */}
            <Mapa />
            {/*
             *
             *
             * * *  */}
          </Grid>
        </Grid>
      </Box>
      <FooterPublic />
    </>
  );
}
