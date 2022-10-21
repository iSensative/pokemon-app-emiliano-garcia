const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Pokemon', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image:{
      type:DataTypes.STRING,
      allowNull:false
     },
    healht:{
    type:DataTypes.INTEGER,
    allowNull:false 
    },
    attack:{
    type:DataTypes.INTEGER,
    allowNull:true  
    },
    defense:{
      type:DataTypes.INTEGER,
      allowNull:false
      },
      weight:{
        type:DataTypes.INTEGER,
        allowNull:false 
        },
      height:{
          type:DataTypes.INTEGER,
          allowNull:false 
          },
    createdInDb:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }

  });
};
