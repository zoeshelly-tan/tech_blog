const router = require('express').Router();
const { Blog, User } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');

//Get all blogs
router.get('/',async(req,res)=>{
    try{
        const blogData = await BlogData.findAll({
            include:[{model:User}],
        });
        res.status(200).json(blogData);
    }catch(err){
        res.status(500).json(err);
    }
})

//Get a single blog
router.get('/:id',async(req,res)=>{
    try{
        const blogData = await BlogData.findByPk(req.params.id,{
            include:[{model:User}],
        });
        if(!blogData){
            res.status(404).json({message:'No blog found with that id!'})
            return;
        }
        res.status(200).json(blogData);
    }catch(err){
        res.status(500).json(err);
    }
});

//Create a blog
router.post('/', withAuth,  async (req, res) => {
    try {
        const newBlogData = await Blog.create({
            blog: req.body.comment,
            user_id: req.session.user_id,
        });
        console.log(newBlogData);
        res.status(200).json();
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

//Delete a blog
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const deletedReview = await Blog.destroy({
            where: {
                blog_id: req.params.id,
            },
        });
        console.log(deletedReview);
        res.status(200).redirect('/')
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});


module.exports = router;