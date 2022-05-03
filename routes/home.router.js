const Router = require ('@koa/router');

const router = new Router({
    prefix: '/home'
});

router.get('/', ctx => {
    ctx.body = 'Hello World from webstrome get';
});

router.post('/', ctx => {
    ctx.body = 'Hello World from webstrome post';
});

module.exports = router;
//export default router;