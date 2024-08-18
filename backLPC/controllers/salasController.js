const Salas = require("../models/Salas");


exports.getSalas = async (req, res) => {
    try{
    const salas = await Salas.findAll();
    res.status(201).json(salas);
    }catch(error){
        res.status(500).json({message: error.message});
    }
};

exports.crearSala = async (req,res) => {
    const {imagen,nombre,direccion,capacidad,estado} = req.body;

    try{
    const nuevaSala = Salas.create({
        imagen,
        nombre,
        direccion,
        capacidad,
        estado
    });
    res.status(201).json({
        message: "Sala creada exitosamente",
    });
    }catch(error){
        res.status(500).json({message: error.message});
    }
}