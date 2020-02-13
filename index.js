const Koa = require('koa');
const Router = require('@koa/router');

const app = new Koa();
const router = new Router();

router.get('/simple/health', (ctx, next) => {
  ctx.body = {"message": "simple v0.0.1 Up"};
});

app.use(router.routes());

app.listen(8080);