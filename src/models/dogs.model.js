const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/database.js"); 
const User = require("./users.model");

const Dog = sequelize.define(
    "Dog",
    {
        id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        },
        nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        raza: {
        type: DataTypes.STRING,
        },
        edad: {
        type: DataTypes.INTEGER,
        },
    },
    {
        tableName: "dogs",
        timestamps: false,
    }
);

// Relación de un user tiene muchos dogs
User.hasMany(Dog, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
});

Dog.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = Dog;
