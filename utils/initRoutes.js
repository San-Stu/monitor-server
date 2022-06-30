const requireDirectory = require("require-directory");
const Router = require("koa-router");

class InitRoutes {
  static init(app) {
    InitRoutes.app = app;
    InitRoutes.initLoadRouters();
  }

  static initLoadRouters() {
    const apiDirectory = `${process.cwd()}/routes`
    requireDirectory(module, apiDirectory, {
      visit: (obj) => {
        if (obj instanceof Router) {
          InitRoutes.app.use(obj.routes());
        }
      }
    })
  }
}

module.exports = InitRoutes;
