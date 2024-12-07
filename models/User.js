const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');  

class User extends Model {}

User.init({
  id: {
    type: DataTypes.INTEGER,  
    primaryKey: true,         
    autoIncrement: true,     
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,  // Osiguraj jedinstvenost username
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,  // Osiguraj jedinstvenost email
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('basic', 'admin'),
    defaultValue: 'basic',
  },
}, {
  sequelize,
  modelName: 'User',
  tableName: 'users',
  timestamps: true,
});

module.exports = User;