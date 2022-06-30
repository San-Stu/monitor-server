module.exports = () => async (ctx, next) => {
  if (ctx.query.projectKey) {
    return await next();
  }
  ctx.response.status = 400;
};