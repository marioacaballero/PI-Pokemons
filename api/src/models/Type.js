const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    'type',
    {
      name: {
        type: DataTypes.ENUM(
          "normal",
          "fighting",
          "flying",
          "poison",
          "ground",
          "rock",
          "bug",
          "ghost",
          "steel",
          "fire",
          "water",
          "grass",
          "electric",
          "psychic",
          "ice",
          "dragon",
          "dark",
          "fairy",
          "unknown",
          "shadow"
        ),
        allowNull: false,
        defaultValue: "unknown"
      },
      img: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
  );
};
