import Router from '@koa/router';

const router = new Router({
    prefix: '/home'
});

router.get('/', ctx => {
    ctx.body = 'Hello World from webstrome get';
});

router.post('/', ctx => {
    ctx.body = 'Hello World from webstrome post';
});


//export default router;