var express = require('express');
var router = express.Router();
const model=require('../model');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const post=await model.Post.findAll();
  res.render('index', {posts:post});
});

router.get('/new', function(req,res,next){
  res.render('new');
});

router.get('/:id', async function(req,res,next){
  const post=await model.Post.findOne({
    where:{id:req.params.id}
  });
  res.render('detail', {post:post});
})

router.get('/:id/edit', async function(req,res,next){
  const post=await model.Post.findOne({
    where:{id:req.params.id}
  });
  res.render('edit', {post:post});
});

router.post('/', async function(req,res,next){
  const post=await model.Post.create({
    title:req.body.title,
    content:req.body.content,
    author:req.body.author
  });
  console.log(post);
  res.redirect('/'+post.id);
})

router.put('/:id', async function(req,res,next){
  await model.Post.update({
    title:req.body.title,
    content:req.body.content,
    author:req.body.author
  },{where:{id:req.params.id}});
  res.redirect('/'+req.params.id);
});

router.delete('/:id', async function(req,res,next){
  await model.Post.destroy({
    where:{id:req.params.id}
  });
  res.redirect('/');
})

module.exports = router;
