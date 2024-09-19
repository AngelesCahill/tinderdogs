const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/database.js"); 
const User = require("./users.model");
const Post = require("./posts.model");

const Comment = sequelize.define(
    "Comment",
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
        tableName: "comments",
        timestamps: false,
    }
);

// Relación de un post tiene muchos comentarios
Post.hasMany(Comment, {
    foreignKey: "post_id",
    onDelete: "CASCADE",
});

// Relación de un comentario pertenece a un post
Comment.belongsTo(Post, {
  foreignKey: "post_id",
});

// Relación de un comentario pertenece a un user
Comment.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = Comment;
