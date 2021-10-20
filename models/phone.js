'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Phone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
    }
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
