const Koa = require('koa');
const HomeRoute = require ('./routes/home.router.js')
const HomeRoutes = require ('./routes/post.routes.js');
const bodyParser = require ('koa-bodyparser');

const app = new Koa();
app.use(bodyParser());

app.use(HomeRoutes.routes())
    .use(HomeRoutes.allowedMethods())
    .use(HomeRoute.routes())
    .use(HomeRoute.allowedMethods());

app.listen(3000);

console.log('Application is running on port 3000');
