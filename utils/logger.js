const path = require('path')
const log4js = require('log4js')

log4js.configure({
  replaceConsole: true,
  appenders: {
    pv: {
      // 设置类型为 dateFile
      type: 'dateFile',
      // 配置文件名
      filename: path.resolve('./logs/monitor/pv/pv.log'),
      // 指定编码格式为 utf-8
      encoding: 'utf-8',
      // 配置 layout，此处使用自定义模式 pattern
      layout: {
        type: "pattern",
        // 自定义内容
        pattern: '%m'
      },
      // 日志文件按日期（天）切割
      pattern: ".yyyy-MM-dd",
      // 输出的日志文件名是都始终包含 pattern 日期结尾
      alwaysIncludePattern: true
    },
    error: {
      // 设置类型为 dateFile
      type: 'dateFile',
      // 配置文件名
      filename: path.resolve('./logs/monitor/error/error.log'),
      // 指定编码格式为 utf-8
      encoding: 'utf-8',
      // 配置 layout，此处使用自定义模式 pattern
      layout: {
        type: "pattern",
        // 自定义内容
        pattern: '%m'
      },
      // 日志文件按日期（天）切割
      pattern: ".yyyy-MM-dd",
      // 输出的日志文件名是都始终包含 pattern 日期结尾
      alwaysIncludePattern: true
    },
    per: {
      // 设置类型为 dateFile
      type: 'dateFile',
      // 配置文件名
      filename: path.resolve('./logs/monitor/per/per.log'),
      // 指定编码格式为 utf-8
      encoding: 'utf-8',
      // 配置 layout，此处使用自定义模式 pattern
      layout: {
        type: "pattern",
        // 自定义内容
        pattern: '%m'
      },
      // 日志文件按日期（天）切割
      pattern: ".yyyy-MM-dd",
      // 输出的日志文件名是都始终包含 pattern 日期结尾
      alwaysIncludePattern: true
    },
    source: {
      // 设置类型为 dateFile
      type: 'dateFile',
      // 配置文件名
      filename: path.resolve('./logs/monitor/source/source.log'),
      // 指定编码格式为 utf-8
      encoding: 'utf-8',
      // 配置 layout，此处使用自定义模式 pattern
      layout: {
        type: "pattern",
        // 自定义内容
        pattern: '%m'
      },
      // 日志文件按日期（天）切割
      pattern: ".yyyy-MM-dd",
      // 输出的日志文件名是都始终包含 pattern 日期结尾
      alwaysIncludePattern: true
    },
    xhr: {
      // 设置类型为 dateFile
      type: 'dateFile',
      // 配置文件名
      filename: path.resolve('./logs/monitor/xhr/xhr.log'),
      // 指定编码格式为 utf-8
      encoding: 'utf-8',
      // 配置 layout，此处使用自定义模式 pattern
      layout: {
        type: "pattern",
        // 自定义内容
        pattern: '%m'
      },
      // 日志文件按日期（天）切割
      pattern: ".yyyy-MM-dd",
      // 输出的日志文件名是都始终包含 pattern 日期结尾
      alwaysIncludePattern: true
    },
  },
  categories: {
    // 设置默认的 categories
    default: { appenders: ['pv'], level: 'info' },
    error: { appenders: ['error'], level: 'info' },
    per: { appenders: ['per'], level: 'info' },
    source: { appenders: ['source'], level: 'info' },
    xhr: { appenders: ['xhr'], level: 'info' },
  }
})

exports.pvLogger = log4js.getLogger('pv');
exports.errorLogger = log4js.getLogger('error');
exports.perLogger = log4js.getLogger('per');
exports.sourceLogger = log4js.getLogger('source');
exports.xhrLogger = log4js.getLogger('xhr');