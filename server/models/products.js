'use strict';
module.exports = (Sequelize, DataTypes) => {
  var products = Sequelize.define('products', {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
      },
      catid: {
        type: DataTypes.UUID
      },
      name: {
        type: DataTypes.STRING
      },
      price: {
        type: DataTypes.INTEGER
      },
      sku: {
        type: DataTypes.STRING
      },
      image: {
        type: DataTypes.STRING
      },
  }, {
      timestamps: false
  });
  
  products.associate = function(models) {
    // associations can be defined here
  };
  return products;
};