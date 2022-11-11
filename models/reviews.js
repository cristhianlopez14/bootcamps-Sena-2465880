'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reviews extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Reviews.init({
    title:{
      type:DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate:{
        notEmpty:{
          args: true,
          msg: 'Title no debe quedar vacio'
        },
        notNull:{
          args: true,
          msg: 'Title campo oblogatorio'
        }
      }
    },
    text:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate:{
        notEmpty:{
          args: true,
          msg: 'Text no debe quedar vacio'
        },
        notNull:{
          args: true,
          msg: 'Text campo oblogatorio'
        }
      }
    },
    rating:{
      type: DataTypes.REAL,
      allowNull: false,
      unique: true,
      validate:{
        notEmpty:{
          args: true,
          msg: 'rating no debe quedar vacio'
        },
        notNull:{
          args: true,
          msg: 'Rating campo oblogatorio'
        }
      }
    },
    bootcamp_id:{
      type: DataTypes.REAL,
      allowNull: false,
      unique: true,
      validate:{
        notEmpty:{
          args: true,
          msg: 'Bootcamp_id no debe quedar vacio'
        },
        notNull:{
          args: true,
          msg: 'Bootcamp_id campo oblogatorio'
        }
      }
    },
    user_id:{
      type: DataTypes.REAL,
      allowNull: false,
      unique: true,
      validate:{
        notEmpty:{
          args: true,
          msg: 'User_id no debe quedar vacio'
        },
        notNull:{
          args: true,
          msg: 'User_id campo oblogatorio'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Reviews',
    timestamps: false
  });
  return Reviews;
};