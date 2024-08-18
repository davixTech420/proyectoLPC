import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import HeaderPublic from "../../partials/HeaderPublic";
import FooterPublic from "../../partials/FooterPublic";
import { Button, Alert,Typography,Card,CardContent,CardActions,Grid,Paper,CardMedia,Snackbar } from '@mui/material';
import { listarSala } from "../../../services/AdminServices";







export default function Teatros() {

  const [openAlert, setOpenAlert] = useState(false);
  const [salas, setSalas] = useState([]);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await listarSala();
        setSalas(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [salas]);



  return (
    <>




      <HeaderPublic />

      <center><h1>Teatros</h1></center>
{/* contenedor de la vista de teatros con las imagenees  */}
      <Box sx={{ maxWidth: '100%', maxHeight: '80%' , marginInline: '30px'}}>

  
     {/*    <Ventana
          openDialog={openDialog}
          closeDialog={closeDialog}
          product={gameSelect}
          onAddProduct={onAddProduct}
        /> */}
    



{/* Solo muestra la ImageList si no hay alerta abierta */}
{!openAlert && (
  <ImageList variant="masonry" cols={3} gap={8}>
    {salas.map((sala) => (
      <ImageListItem key={sala.id}>
        <img
          
          src={sala.imagen}
          
          loading="lazy"
        />
      </ImageListItem>
    ))}
  </ImageList>
)}
    </Box>
<FooterPublic />
</>
);
}
