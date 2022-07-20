const request = require('request');

// 机器人webhook
const access_token = 'c24036eb65d16ec08889c9f4d0100d53d1b89cce4efc914e08d2629cb6b9eb20'
// const sign = 'SEC4f6914e1ac2de27389dbeb333fa2c51827f0972dbafcc9bb636cb3377323d359'
const webhook = `https://oapi.dingtalk.com/robot/send?access_token=${access_token}`;

// 发送内容
const jsonData = {
  "msgtype": "markdown",
  "markdown": {
    "title": "测试标题",
    "text": `
      # 报警
      - item1
      - item2
    `
  }
}

const dingrobot = {
  async send(ctx, next) {
    request.post({
      url: webhook,
      headers: {
        'Content-Type': 'application/json',
      },
      json: jsonData,
    }, (error, response, body) => {
      console.log(body);
      ctx.body = {
        code: 0
      }
    })
  }
}

module.exports = dingrobot;
