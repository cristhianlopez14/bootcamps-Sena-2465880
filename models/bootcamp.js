'use strict';
const {
  Model 
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bootcamp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Bootcamp.init({
    name: {
      type:DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate:{
        isAlpha:{
          args: true,
          msg: 'Bootcamp solo debe tener letras'
        },
        notEmpty:{
          args: true,
          msg: 'Bootcamp no debe quedar vacio'
        },
        notNull:{
          args: true,
          msg: 'Bootcamp debe contener los datos requeridos'
        } 
      }
    },
  
    description:{
      type:DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate:{
        notEmpty:{
          args: true,
          msg: 'Descripción no debe quedar vacio'
        },
        notNull:{
          args: true,
          msg: 'Descripción debe contener los datos requeridos'
        } 
      }
    },
    phone:{
      type:DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate:{
        notEmpty:{
          args: true,
          msg: 'Phone no debe quedar vacio'
        },
        notNull:{
          args: true,
          msg: 'Phone debe contener los datos requeridos'
        }
      }
    },
    average_cost:{
      type: DataTypes.FLOAT,
      unique: true,
      validate:{
        isAlpha:{
          args: true,
          msg: 'average_cost solo debe tener letras'
        },
        notEmpty:{
          args: true,
          msg: 'average_cost no debe quedar vacio'
        }
      }
    },
    average_rating:{
      type: DataTypes.INTEGER,
      unique: true,
      validate:{
        notEmpty:{
          args: true,
          msg: 'average_rating no debe quedar vacio'
        }
      }
    } 
  }, {
    sequelize,
    modelName: 'Bootcamp',
    timestamps:false
  });
  return Bootcamp;
};