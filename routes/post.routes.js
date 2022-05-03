const Router = require ("@koa/router");
const {getPosts, createPost, getPost} = require("../api/posts.api");


const router = new Router({
    prefix: '/posts'
});

console.log("routes called");

router.get('/', ctx => {
    ctx.body = getPosts();
});

router.post('/', ctx => {
    let post = ctx.request.body;
    post = createPost(post);
    ctx.response.status = 201;
    ctx.body = post;
});

router.get('/:id', ctx => {
    const id = ctx.params.id;
    ctx.body = getPost(id);
});

module.exports = router;