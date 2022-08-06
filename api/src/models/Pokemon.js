const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    'pokemon',
    {
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
        type: DataTypes.INTEGER,
        validate: {
          min: 1,
          max: 150,
        },
      },
      attack: {
        type: DataTypes.INTEGER,
        validate: {
          min: 1,
          max: 150,
        },
      },
      defense: {
        type: DataTypes.INTEGER,
        validate: {
          min: 1,
          max: 150,
        },
      },
      speed: {
        type: DataTypes.INTEGER,
        validate: {
          min: 1,
          max: 150,
        },
      },
      height: {
        type: DataTypes.INTEGER,
        validate: {
          min: 1,
          max: 200,
        },
      },
      weigth: {
        type: DataTypes.INTEGER,
        validate: {
          min: 1,
          max: 9999,
        },
      },
      img: {
        type: DataTypes.STRING,
      },
      createdOnDb: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      timestamps: false,
    }
  );
};
