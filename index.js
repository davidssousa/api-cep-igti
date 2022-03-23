const app = require('./configs/express')();
const healthCheck = require("./api/healthCheck");

const porta = process.env.PORT || 3000;

app.use("/", healthCheck);
app.use("/v1/healthCheck", healthCheck);

app.listen(porta, () => console.log(`API CEP iniciou... \nURL: http://localhost:${porta}`));

module.exports = app;