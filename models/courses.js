'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Courses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Courses.init({
    title:{
      type:DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate:{
        notNull:{
          args:true,
          msg: 'Title Campo Obligatorio'
        },
        notEmpty:{
          args: true,
          msg: 'Title no debe quedar vacio'
        }
      }
    },
    description:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate:{
        notEmpty:{
          args: true,
          msg: 'Description no debe quedar vacio'
        },
        notNull:{
          args: true,
          msg: 'Description Campo Obligatorio'
        }
      }
    },
    weeks:{
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      validate:{
        notEmpty:{
          args: true,
          msg: 'Weeks no debe quedar vacio'
        },
        notNull:{
          args: true,
          msg: 'weeks Campo Obligatorio'
        }
      }
    },
    enroll_cost:{
      type:DataTypes.REAL,
      allowNull: false,
      unique: true,
      validate:{
        notEmpty:{
          args: true,
          msg: 'enroll_cost no debe quedar vacio'
        },
        notNull:{
          args: true,
          msg: 'enroll_cost Campo Obligatorio'
        }
      }
    },
    minimum:{
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate:{
        notEmpty:{
          args: true,
          msg: 'enroll_cost no debe quedar vacio'
        },
        notNull:{
          args: true,
          msg: 'minimum Campo Obligatorio'
        }
      }
    },
    bootcamp_id:{
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
      validate:{
        notEmpty:{
          args: true,
          msg: 'bootcamp_id no debe quedar vacio'
        },
        notNull:{
          args: true,
          msg: 'bootcamp_id Campo Obligatorio'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Courses',
    timestamps: false
  });
  return Courses;
};