const { default: fastify } = require("fastify");
const userRouters = require("./estrutura/routers/userRouters");
const app = fastify();

userRouters(app);

app.listen({
  port: 3000,
});
