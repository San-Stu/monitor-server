const fs = require('fs')
const path = require('path')
const {
  pvLogger,
  errorLogger,
  perLogger,
  sourceLogger,
  xhrLogger } = require('../../utils/logger')

const collect = {
  async pv(ctx, next) {
    pvLogger.info(JSON.stringify({
      ...ctx.query,
      ip: ctx.ip || ''
    }))
    ctx.set('Content-Type', 'image/gif')
    ctx.body = fs.createReadStream(path.resolve('./public/hm.gif'))
  },

  async xhr(ctx, next) {
    xhrLogger.info(JSON.stringify({...ctx.query}))
    ctx.set('Content-Type', 'image/gif')
    ctx.body = fs.createReadStream(path.resolve('./public/hm.gif'))
  },

  async per(ctx, next) {
    perLogger.info(JSON.stringify({...ctx.query}))
    ctx.set('Content-Type', 'image/gif')
    ctx.body = fs.createReadStream(path.resolve('./public/hm.gif'))
  },

  async error(ctx, next) {
    errorLogger.info(JSON.stringify({
      ...ctx.query,
      ip: ctx.ip || ''
    }))
    ctx.set('Content-Type', 'image/gif')
    ctx.body = fs.createReadStream(path.resolve('./public/hm.gif'))
  },

  async source(ctx, next) {
    const data = JSON.parse(ctx.request.body || '{}')
    if (!data.projectKey) {
      ctx.response.status = 400;
      return
    }
    ctx.body = {
      code: 0
    }
    data.source.forEach((item) => {
      item.projectKey = data.projectKey
      sourceLogger.info(JSON.stringify(item))
    })
  },
}

module.exports = collect;
