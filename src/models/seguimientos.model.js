const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/database.js");
const User = require("./users.model");

const Seguimiento = sequelize.define(
  "Seguimiento",
  {
    follower_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onDelete: "CASCADE",
    },
    followed_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onDelete: "CASCADE",
    },
  },
  {
    tableName: "seguimientos",
    timestamps: false,
    primaryKey: ["follower_id", "followed_id"],
  }
);

// Relación muchos a muchos: un usuario sigue a muchos usuarios
User.belongsToMany(User, {
  as: "Followers",
  through: Seguimiento,
  foreignKey: "followed_id",
});

// Relación muchos a muchos: un usuario tiene muchos seguidores
User.belongsToMany(User, {
  as: "Followed",
  through: Seguimiento,
  foreignKey: "follower_id",
});

module.exports = Seguimiento;
