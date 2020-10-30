const Koa = require('koa');
const Router = require('@koa/router');

const app = new Koa();
const router = new Router();

router.get('/health', (ctx, next) => {
  ctx.body = {"message": "v0.0.1 Up"};
});

app.use(router.routes());

app.listen(8080);