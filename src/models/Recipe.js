const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,

    },
    name: {
      type: DataTypes.STRING,
    },
    dishTypes: {
      type: DataTypes.STRING,
    },
    healthscore: {
      type: DataTypes.INTEGER
    },
    steps: {
      type: DataTypes.STRING
    },
    image: {
      type: DataTypes.STRING
    },
    summary: {
      type: DataTypes.STRING
    }
  }, {
    timestamps: false
  });
};
