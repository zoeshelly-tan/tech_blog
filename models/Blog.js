const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Blog extends Model { }

Blog.init(
    {
        blogId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        blog_content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        blog_title:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'user_id',
            },
        },
        date_created: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'blogs',
    }
);

module.exports = Blog;
