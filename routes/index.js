const router = require('koa-router')()
const CollectController = require('../app/controller/collect')
const projectKeyCheck = require('../middleware/projectKeyCheck')

const collectRoute = router.prefix('/collect')
collectRoute.get('/pv.gif', projectKeyCheck(), CollectController.pv);
collectRoute.get('/xhr.gif', projectKeyCheck(), CollectController.xhr);
collectRoute.get('/per.gif', projectKeyCheck(), CollectController.per);
collectRoute.get('/error.gif', projectKeyCheck(), CollectController.error);
collectRoute.post('/source', CollectController.source);

module.exports = router
