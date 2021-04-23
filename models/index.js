const Blog = require('./Blog');
const User = require('./User');

User.hasMany(Blog, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Blog.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'reviewer'
});



module.exports = { User, Blog };
