import React from "react";
import { Box, Grid, Avatar, Typography, Tabs, Tab } from '@mui/material';
import { Container, Card, CardContent ,IconButton,Button} from '@mui/material';
import { Twitter, Instagram, Facebook } from '@mui/icons-material';
import HeaderPublic from '../../partials/HeaderPublic';


export default function Prueba(){
    const posts = [
        // Array de URLs de las imágenes (puedes reemplazarlo con imágenes reales)
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
        // Más imágenes...
    ];
    return(
<>



<HeaderPublic/>

<Container sx={{ marginTop:5 }} maxWidth="lg">
      <Grid container spacing={4}>
        
        {/* Sección de perfil */}
        <Grid item xs={12} md={4}>
          <Card sx={{ padding: 2, textAlign: 'center' }}>
            <Avatar
              alt="John Smith"
              src="/path-to-avatar.jpg"
              sx={{ width: 120, height: 120, margin: 'auto' }}
            />
            <Typography variant="h5" mt={2}>
              John Smith
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Full Stack Developer
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              Bay Area, San Francisco, CA
            </Typography>
            <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
              FOLLOW
            </Button>
            <Button variant="outlined" sx={{ marginLeft: 2, marginTop: 2 }}>
              MESSAGE
            </Button>
          </Card>
        </Grid>

        {/* Sección de detalles */}
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Full Name: Johnatan Smith
              </Typography>
              <Typography variant="body1" gutterBottom>
                Email: example@example.com
              </Typography>
              <Typography variant="body1" gutterBottom>
                Phone: (097) 234-5678
              </Typography>
              <Typography variant="body1" gutterBottom>
                Mobile: (098) 765-4321
              </Typography>
              <Typography variant="body1" gutterBottom>
                Address: Bay Area, San Francisco, CA
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Sección de redes sociales */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Box display="flex" alignItems="center">
                <IconButton color="primary">
                  <img src="/path-to-icon.png" alt="Website" />
                </IconButton>
                <Typography variant="body2">https://mdbootstrap.com</Typography>
              </Box>
              <Box display="flex" alignItems="center" mt={2}>
                <IconButton color="primary">
                  <Twitter />
                </IconButton>
                <Typography variant="body2">@mdbootstrap</Typography>
              </Box>
              <Box display="flex" alignItems="center" mt={2}>
                <IconButton color="primary">
                  <Instagram />
                </IconButton>
                <Typography variant="body2">@mdbootstrap</Typography>
              </Box>
              <Box display="flex" alignItems="center" mt={2}>
                <IconButton color="primary">
                  <Facebook />
                </IconButton>
                <Typography variant="body2">@mdbootstrap</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Sección de estado de proyectos */}
        <Grid item xs={12} md={8}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Project Status
                  </Typography>
                  <Typography variant="body2">
                    Web Design
                  </Typography>
                  {/* Aquí podrías agregar un progreso */}
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Project Status
                  </Typography>
                  <Typography variant="body2">
                    Website Markup
                  </Typography>
                  {/* Aquí podrías agregar un progreso */}
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>

      </Grid>
    </Container>
















       
    

        
        </>
    );
}