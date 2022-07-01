const Koa = require('koa')
const app = new Koa({
  proxy: true
})
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const session = require('koa-generic-session')
const redisStore = require('koa-redis')
const cors = require('koa2-cors')
const InitRoutes = require('./utils/initRoutes')

const { REDIS_CONF } = require('./config/db')
const { SESSION_SECRET_KEY } = require('./config/secretKeys')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())

// 跨域
app.use(cors())

// session配置
app.keys = [SESSION_SECRET_KEY]
app.use(session({
  key: 'monitor.sid', // cookie name 默认是koa.sid
  prefix: 'monitor:sess:', // redis key的前缀，默认是koa:sess:
  cookie: {
    path: '/',
    httpOnly: true, // 只能服务端修改，不能客户端修改
    maxAge: 24 * 60 * 60 * 1000 // 过期时间
  },
  // ttl: 24 * 60 * 60 * 1000, // redis过期时间，默认和cookie过期时间一样
  store: redisStore({
    all: `${REDIS_CONF.host}:${REDIS_CONF.port}}`
  })
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
InitRoutes.init(app);

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
