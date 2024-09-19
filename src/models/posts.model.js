const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/database.js"); 
const User = require("./users.model");

const Post = sequelize.define(
    "Post",
    {
        contenido: {
        type: DataTypes.TEXT,
        allowNull: false,
        },
        fecha: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        },
    },
    {
        tableName: "posts",
        timestamps: false,
    }
);

// Relación de un user tiene muchos posts
User.hasMany(Post, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = Post;
