const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');
const User = require("./User");
class Task extends Model {}

Task.init(
  {
    body: { 
      type: DataTypes.STRING, 
      allowNull: false 
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    modelName: 'Task',
    tableName: 'tasks',
    timestamps: true,
  }
);

Task.belongsTo(User);
User.hasMany(Task);

module.exports = Task;