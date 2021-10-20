'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Phone extends Model {
    static assosiate () {}
  }
  Phone.init(
    {
      model: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: /^[A-Z]{1,10}\d{1,20}$/,
        },
      },
      brand: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: /^[A-Z][a-z]{1,10}$/,
        },
      },
      year: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      memory_storage_capacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      processor: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      screen_size: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      NFC: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: 'Phone',
    }
  );
  return Phone;
};
