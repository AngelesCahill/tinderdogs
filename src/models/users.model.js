const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/database.js"); 

const User = sequelize.define(
    "User",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        },
        password: {
        type: DataTypes.STRING,
        allowNull: false,
        },
    },
    {
        tableName: "users",
        timestamps: false,
    }
);

module.exports = User;
