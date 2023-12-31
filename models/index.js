// import models
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

//assigning relations

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Post, {
    foreignKey: 'user_id'
}),

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
}),

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE',
    hooks: true, 
}),

Comment.belongsTo(User, {
    foreignKey: 'user_id'
    
}),

User.hasMany(Comment, {
    foreignKey: 'user_id'
})

module.exports = {
    User,
    Post,
    Comment
}