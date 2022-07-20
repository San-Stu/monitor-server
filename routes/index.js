const router = require('koa-router')()
const CollectController = require('../app/controller/collect')
const DingrobotController = require('../app/controller/dingrobot')
const projectKeyCheck = require('../middleware/projectKeyCheck')

const collectRoute = router.prefix('/collect')
const dingrobotRoute = router.prefix('/dingrobot')
collectRoute.get('/pv.gif', projectKeyCheck(), CollectController.pv);
collectRoute.get('/xhr.gif', projectKeyCheck(), CollectController.xhr);
collectRoute.get('/per.gif', projectKeyCheck(), CollectController.per);
collectRoute.get('/error.gif', projectKeyCheck(), CollectController.error);
collectRoute.post('/source', CollectController.source);
dingrobotRoute.get('/send', DingrobotController.send);

module.exports = router
