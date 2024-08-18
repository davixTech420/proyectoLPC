import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import HeaderRol from "../../partials/HederRol";
import CssBaseline from "@mui/material/CssBaseline";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
} from "@mui/material";
import { Table,TableHead,TableRow,TableCell , TableBody } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Barras from '../../../images/barras.png';
import Graf from "../../../images/grafico.png";

const defaultTheme = createTheme();

export default function Dashboard() {
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  
const rows = [
  createData(
    0,
    '16 Mar, 2019',
    'Elvis Presley',
    'Tupelo, MS',
    'VISA ⠀•••• 3719',
    312.44,
  ),
  createData(
    1,
    '16 Mar, 2019',
    'Paul McCartney',
    'London, UK',
    'VISA ⠀•••• 2574',
    866.99,
  ),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(
    3,
    '16 Mar, 2019',
    'Michael Jackson',
    'Gary, IN',
    'AMEX ⠀•••• 2000',
    654.39,
  ),
  createData(
    4,
    '15 Mar, 2019',
    'Bruce Springsteen',
    'Long Branch, NJ',
    'VISA ⠀•••• 5919',
    212.79,
  ),
];

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

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
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* se muestra el contenido en lateral de de los cuadros de informacion  */}
              <Grid item xs={12} md={15} lg={15}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "fillColumn",
                    height: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <Card
                    sx={{
                      maxWidth: "100%",
                      margin: "auto",
                      padding: 2,
                      marginInline: "1%",
                    }}
                  >
                    <CardContent
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "left",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: 20,
                          textAlign: "left",
                          display: "relative",
                        }}
                        color="text.secondary"
                        gutterBottom
                      >
                        Clientes
                      </Typography>
                      <Typography
                        variant="h5"
                        component="div"
                        sx={{ fontSize: 35 }}
                      >
                        50.020
                      </Typography>
                    </CardContent>
                  </Card>

                  <Card
                    sx={{
                      maxWidth: "100%",
                      margin: "auto",
                      padding: 2,
                      marginInline: "1%",
                    }}
                  >
                    <CardContent
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "left",
                      }}
                    >
                      <Typography
                        sx={{ fontSize: 20 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        Ingresos
                      </Typography>
                      <Typography
                        variant="h5"
                        component="div"
                        sx={{ fontSize: 35 }}
                      >
                        $9.999.999
                      </Typography>
                    </CardContent>
                  </Card>

                  <Card
                    sx={{
                      maxWidth: "100%",
                      margin: "auto",
                      padding: 2,
                      marginInline: "1%",
                    }}
                  >
                    <CardContent
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "left",
                      }}
                    >
                      <Typography
                        sx={{ fontSize: 20 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        Ingresos
                      </Typography>
                      <Typography
                        variant="h5"
                        component="div"
                        sx={{ fontSize: 35 }}
                      >
                        $9.999.999
                      </Typography>
                    </CardContent>
                  </Card>
                </Paper>
              </Grid>

              {/* Recent Deposits */}
              <Grid item xs={12} md={8} lg={8}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 240,
                  }}
                >
                  <img src={Graf} style={{ width: "100%", height: "100%" }} />
                </Paper>
              </Grid>

              <Grid item xs={12} md={4} lg={4}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 240,
                  }}
                >
                  <List
                    sx={{
                      width: "100%",
                      maxWidth: "100%",
                    }}
                  >
                    <ListItem sx={{ borderBottom: "1px solid #ddd" }}>
                      <ListItemAvatar>
                        <Avatar
                          alt="Remy Sharp"
                          src="/static/images/avatar/1.jpg"
                        />
                      </ListItemAvatar>
                      <ListItemText primary="Brunch this weekend?" />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem sx={{ borderBottom: "1px solid #ddd" }}>
                      <ListItemAvatar>
                        <Avatar
                          alt="Travis Howard"
                          src="/static/images/avatar/2.jpg"
                        />
                      </ListItemAvatar>
                      <ListItemText primary="Summer BBQ" />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem sx={{ borderBottom: "1px solid #ddd" }}>
                      <ListItemAvatar>
                        <Avatar
                          alt="Cindy Baker"
                          src="/static/images/avatar/3.jpg"
                        />
                      </ListItemAvatar>
                      <ListItemText primary="Oui Oui" />
                    </ListItem>
                  </List>
                </Paper>
              </Grid>

              <Grid item xs={12} md={7} lg={7}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 240,
                  }}
                >
                 <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Ship To</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{`$${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
                </Paper>
              </Grid>
              <Grid item xs={12} md={5} lg={5}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 240,
                  }}
                >
                  <img src={Barras} style={{ width: "100%", height: "100%" }} />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
