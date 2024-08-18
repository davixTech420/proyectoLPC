const express = require("express");
const router = express.Router();
const Administrador = require("../models/Admin");
const Cliente =require("../models/Client");
const Empleado = require("../models/Empleado");
const Salas = require("../models/Salas");
const User = require("../models/User");
const salasController = require("../controllers/salasController");
const adminController = require("../controllers/adminController");

router.get("/dashboard", (req, res) =>
  res.json({ message: "Bienvenido, admin!" })
);

router.post("/sala",salasController.crearSala);
router.get("/sala", salasController.getSalas);



router.get("/tabla/:tableId",adminController.tabla );
module.exports = router;
