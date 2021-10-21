'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Phone extends Model {
    static associate (models) {
      // Phone.belongsTo(models.Processor, {
      //   foreignKey: 'processorId',
      // });
    }
  }
  Phone.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      model: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: /^[A-Z]{1,10}\d{0,20}$/,
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
      memoryStorageCapacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      processor: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      screenSize: {
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
