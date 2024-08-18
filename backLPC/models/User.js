// models/User.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  apellido:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  tipIdentidad: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  identificacion:{
    type: DataTypes.INTEGER,
    allowNull: false,
    unique:true,
  },
  telefono:{
    type:DataTypes.INTEGER,
    allowNull: false,
    unique:true,
  },
  email:{
    type:DataTypes.STRING,
    allowNull: false,
    unique:true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  estado:{
    type:DataTypes.BOOLEAN,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;
