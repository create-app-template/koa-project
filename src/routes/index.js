const Router = require('koa-router');
const controllers = require('../controllers')
const router = new Router({
    prefix: '/upload'
});

// 测试接口
router.get('/test', controllers.test.test)


module.exports = router;