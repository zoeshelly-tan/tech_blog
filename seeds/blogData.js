const { Blog } = require('../models');

const blogData = [
    {
        blog_title:'blog 1',
        blog_content: 'Best steak in town!!',
        user_id: 1,
        
    },
    {
        blog_title:'blog 2',
        blog_content: 'Great service, will come again',
        user_id: 2,
    },
    {
        blog_title:'blog 3',
        blog_content: 'Gorgeous sea view and a gorgeous feed, cant go wrong!',
        user_id: 3,
    },
];

const seedReview = () => Blog.bulkCreate(blogData);

module.exports = seedReview;