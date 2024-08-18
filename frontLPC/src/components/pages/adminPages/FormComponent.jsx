import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import axios from 'axios';
import {
  Box,
  Grid,
  TextField,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { crearSala } from "../../../services/AdminServices";

export const FormComponent = ({ open, onClose, title, children, actions }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        {title}{" "}
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>{" "}
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions sx={{ justifyContent: "center" }}>{actions}</DialogActions>
    </Dialog>
  );
};

export const FormAdmin = ({ open, close }) => {
 
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    tipIdentidad: "",
    identificacion: "",
    telefono: "",
    email: "",
    password: "",
    estado: true,
    role: "admin",
  });

  const hanSubmit  = async  (e) => {
    e.preventDefault();
    try{
      const regis = await axios.post('http://localhost:3001/api/auth/register', formData);
      console.log(regis.data);
      close();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <FormComponent
      open={open}
      onClose={close}
      title={"Crear Administrador"}
      children={
        <Box sx={{ mt: 3, p: 3 }} component="form" noValidate onSubmit={hanSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="nombre"
                value={formData.nombre}
                onChange={(e) =>
                  setFormData({ ...formData, nombre: e.target.value })
                }
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
                onChange={(e) =>
                  setFormData({ ...formData, apellido: e.target.value })
                }
                id="apellido"
                label="Apellido"
                name="apellido"
                autoComplete="family-name"
                variant="filled"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl variant="filled" sx={{ minWidth: "100%" }}>
                <InputLabel id="demo-simple-select-filled-label">
                  Tipo De Identificacion
                </InputLabel>
                <Select
                  value={formData.tipIdentidad}
                  onChange={(e) =>
                    setFormData({ ...formData, tipIdentidad: e.target.value })
                  }
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
                onChange={(e) =>
                  setFormData({ ...formData, identificacion: e.target.value })
                }
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
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
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
                onChange={(e) =>
                  setFormData({ ...formData, telefono: e.target.value })
                }
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
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="new-password"
                variant="filled"
              />
            </Grid>
          </Grid>
        </Box>
      }
      actions={
        <>
          <Button variant="contained" onClick={hanSubmit}>
            Crear
          </Button>
        </>
      }
    />
  );
};










/**
**
*
*
**este es el formulario del cliene *
***
*
*
*
*
*
*/




export const FormCliente = ({ open, close }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    tipIdentidad: "",
    identificacion: "",
    telefono: "",
    nacionCliente:"",
    direccion: "",
    email: "",
    password: "",
    estado: true,
    role: "cliente",
  });


  const hanSubmit  = async  (e) => {
    e.preventDefault();
    try{
      const regis = await axios.post('http://localhost:3001/api/auth/register', formData);
      console.log(regis.data);
      close();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormComponent
      open={open}
      onClose={close}
      title={"Crear Cliente"}
      children={
        <Box sx={{ mt: 3, p: 3 }} component="form" onSubmit={hanSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="nombre"
                value={formData.nombre}
                onChange={(e) =>
                  setFormData({ ...formData, nombre: e.target.value })
                }
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
                onChange={(e) =>
                  setFormData({ ...formData, apellido: e.target.value })
                }
                id="apellido"
                label="Apellido"
                name="apellido"
                autoComplete="family-name"
                variant="filled"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl variant="filled" sx={{ minWidth: "100%" }}>
                <InputLabel id="demo-simple-select-filled-label">
                  Tipo De Identificacion
                </InputLabel>
                <Select
                  value={formData.tipIdentidad}
                  onChange={(e) =>
                    setFormData({ ...formData, tipIdentidad: e.target.value })
                  }
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
                onChange={(e) =>
                  setFormData({ ...formData, identificacion: e.target.value })
                }
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
                value={formData.direccion}
                onChange={(e) =>
                  setFormData({ ...formData, direccion: e.target.value })
                }
                id="direccion"
                variant="filled"
                label="Direccion"
                name="Direccion"
                
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                value={formData.nacionCliente}
                onChange={(e) =>
                  setFormData({ ...formData, nacionCliente: e.target.value })
                }
                id="nacionalidad"
                variant="filled"
                label="Nacionalidad"
                name="Nacionalidad"
                
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
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
                onChange={(e) =>
                  setFormData({ ...formData, telefono: e.target.value })
                }
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
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="new-password"
                variant="filled"
              />
            </Grid>
          </Grid>
        </Box>
      }
      actions={
        <>
          <Button variant="contained"  onClick={hanSubmit}>
            Crear
          </Button>
        </>
      }
    />
  );
};

/**
 * **
 * *
 * **
 * *
 * *
 * 
 * *
 * *aca terminal el formulario del cliente *
 * *
 * *
 * *
 * *
 * *
 * *
 * **/




/* *
*
*
*
*
*
*
*
*
este es  el fromulario para crear salas *
*
*
*
*
*
*
**/
export const FormSala = ({ open, close }) => {
 
  const [formData, setFormData] = useState({
    imagen: "",
    nombre: "",
    direccion: "",
    capacidad: "",
    estado: true
  });

  const hanSubmit  = async  (e) => {
    e.preventDefault();
    try{
      const regis = crearSala(formData);
      console.log(regis.data);
      close();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <FormComponent
      open={open}
      onClose={close}
      title={"Crear Sala"}
      children={
        <Box sx={{ mt: 3, p: 3 }} component="form" noValidate onSubmit={hanSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="Imagen"
                value={formData.imagen}
                onChange={(e) =>
                  setFormData({ ...formData, imagen: e.target.value })
                }
                required
                fullWidth
                id="imagen"
                label="Imagen"
                autoFocus
                variant="filled"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                value={formData.nombre}
                onChange={(e) =>
                  setFormData({ ...formData, nombre: e.target.value })
                }
                id="nombre"
                label="nombre"
                name="nombre"
                autoComplete="family-name"
                variant="filled"
              />
            </Grid>

           
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                value={formData.direccion}
                onChange={(e) =>
                  setFormData({ ...formData, direccion: e.target.value })
                }
                id="direccion"
                label="Direccion"
                name="direccion"
                autoComplete="family-name"
                variant="filled"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                value={formData.capacidad}
                onChange={(e) =>
                  setFormData({ ...formData, capacidad: e.target.value })
                }
                id="capacidad"
                variant="filled"
                label="Capacidad"
                name="capacidad"
              />
            </Grid>
          </Grid>
        </Box>
      }
      actions={
        <>
          <Button variant="contained" onClick={hanSubmit}>
            Crear
          </Button>
        </>
      }
    />
  );
};
/**
 * *
 * *
 * *
 * *
 * 
 * *
 *  *
 *  aca termina el formulario de crear salas *
 * *
 * *
 * *
 * *
 * *
 * *
 * */

