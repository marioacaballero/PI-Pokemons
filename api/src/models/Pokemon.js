const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hp: {
      type: DataTypes.FLOAT
    },
    attack: {
      type: DataTypes.FLOAT
    },
    defense: {
      type: DataTypes.FLOAT
    },
    speed: {
      type: DataTypes.FLOAT
    },
    height: {
      type: DataTypes.FLOAT
    },
    weigth: {
      type: DataTypes.FLOAT
    },
    img: {
      type: DataTypes.STRING,
    }
  }, {
    timestamps: false
  });
};
