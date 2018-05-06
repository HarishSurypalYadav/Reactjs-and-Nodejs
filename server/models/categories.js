'use strict';
module.exports = (Sequelize, DataTypes) => {
  var categories = Sequelize.define('categories', {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING
      },
      banner: {
        type: DataTypes.STRING
      },
      description: {
        type: DataTypes.TEXT
      },
  }, {
      timestamps: false
  });

  categories.associate = function(models) {
    // associations can be defined here
  };
  return categories;
};