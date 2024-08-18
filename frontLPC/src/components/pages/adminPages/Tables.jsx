import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import HeaderRol from "../../partials/HederRol";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Box,
  Container,
  Toolbar,
  ThemeProvider,
  createTheme,
  Grid,
  Button,
  TextField,
} from "@mui/material";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { FormAdmin,FormCliente, FormSala } from "./FormComponent";

const VistaTabla = () => {
  const { tablaId } = useParams();
  const [openForm, setOpenForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    setOpenForm(false);
    const fetchData = async () => {
      try {
        // Agregar cabeceras de autenticación si es necesario
        const response = await axios.get(
          `http://localhost:3001/api/admin/tabla/${tablaId}`,
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        );
        console.log(response.data);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
        // Manejar el error 403 de forma específica
        if (error.response && error.response.status === 403) {
          console.error("Acceso prohibido");
          // Mostrar un mensaje al usuario o redirigir
        }
      }
    };
    fetchData();
    
  }, [tablaId]);


  const renderForm = (tablaId) => {
    switch (tablaId) {
      case "admins":
        return (
          <FormAdmin
            open={openForm}
            close={() => setOpenForm(false)}
          />
        );
       case "clientes":
        return (
          <FormCliente
            open={openForm}
            close={() => setOpenForm(false)}
          />
        ); 
        case "salas":
        return (
          < FormSala open={openForm} close={() => setOpenForm(false)} />
          
        );
      default:
        return <div>No se encontró el formulario correspondiente.</div>;
    }
  };




  // Renderizar la tabla si no hay errores y los datos están cargados
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <HeaderRol />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
            flexDirection: "fillColumn",
          }}
        >



{tablaId && (
  <>
    {renderForm(tablaId)}
  </>
)}

          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12} lg={12}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Button variant="contained" onClick={() => setOpenForm(true)}>
                    Crear
                  </Button>
                  <Button variant="contained" sx={{ marginInline: 2 }}>
                    Reporte
                  </Button>
                  <TextField
                    id="standard-basic"
                    label="Buscar"
                    variant="standard"
                    placeholder="Ingrese su búsqueda"
                    InputProps={{
                      startAdornment: (
                        <Box sx={{ mr: 1 }}>
                          <SearchIcon />
                        </Box>
                      ),
                    }}
                  />
                </Box>
              </Grid>

              <Grid item xs={12} md={12} lg={12}>
                <TableContainer component={Paper}>
                  {data && (
                    <Table sx={{ minWidth: "100%" }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          {data.columns.map((column) => (
                            <TableCell>{column}</TableCell>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {data.rows.map((row) => (
                          <TableRow
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            {data.columns.map((column) => (
                              <TableCell>{row[column]}</TableCell>
                            ))}
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  )}
                </TableContainer>
              </Grid>
            </Grid>

            {loading && <p>Cargando...</p>}
          </Container>
        </Box>
      </Box>
    </>
  );
};
export default VistaTabla;
