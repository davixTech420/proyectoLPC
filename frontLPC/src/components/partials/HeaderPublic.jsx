import { useState } from "react";
import { Avatar } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import logo from "../../images/lpc.webp";
import { useNavigate, useLocation } from "react-router-dom";

const settings = ["Logout"];

function HeaderPublic() {

//esta cosdigo es para el boton de login cambie su texto y ruta dependiendo la rurta donde se encuentra
const location = useLocation();
  
  // Estado para saber si el usuario ha iniciado sesión o no
/*   const [isLoggedIn, setIsLoggedIn] = useState(false);
 */
  // Determinar el texto y la ruta del botón basado en la ruta actual y el estado de sesión
  const buttonText = location.pathname === '/loginPublic' ? 'Registrar' : 'Login';
  const buttonRoute = location.pathname === '/loginPublic' ? '/registrar' : '/loginPublic';



  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const navegar = useNavigate();
  function nav(path) {
    navegar(path);
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  /*   const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  }; */

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ background: "#f5f5f5" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Avatar
          onClick={() => nav("/welcome")}
            src={logo}
            sx={{ display: { xs: "none", md: "flex" }, mr: 1, color: "white" }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ color: "black" }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={() => nav("/loginPublic")}>
                <Typography textAlign="center">Login</Typography>
              </MenuItem>
              <MenuItem onClick={() => nav("/registrar")}>
                <Typography textAlign="center">Register</Typography>
              </MenuItem>
              <MenuItem onClick={() => nav("/contacto")}>
                <Typography textAlign="center">Contactanos</Typography>
              </MenuItem>
              <MenuItem onClick={() => nav("/teatros")}>
                <Typography textAlign="center">Teatros</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Avatar
            onClick={() => nav("/welcome")}
            src={logo}
            sx={{ display: { xs: "flex", md: "none" }, mr: 1, color: "black" }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            <Button
              onClick={() => nav("/contacto")}
              sx={{ my: 2, color: "black", display: "block" }}
            >
              Contactanos
            </Button>
            <Button
            onClick={() => nav("/teatros")}
             sx={{ my: 2, color: "black", display: "block" }}>
              Teatros
            </Button>
            <Button
              onClick={() => nav(buttonRoute)}
              sx={{
                my: 2,
                color: "white",
                display: "block",
                backgroundColor: "black",
                "&:hover": {
                  backgroundColor: "#ccc", // gris claro
                },
              }}
            >
              {buttonText}
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings"></Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default HeaderPublic;
