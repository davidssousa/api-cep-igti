const app = require('./configs/express')();
const healthCheck = require("./api/healthCheck");
const cep = require("./api/cep");

const porta = process.env.PORT || 3000;

app.use("/", healthCheck);
app.use("/api/healthCheck", healthCheck);
app.use("/api/cep", cep);

app.listen(porta, () => console.log(`API CEP iniciou... \nURL: http://localhost:${porta}`));

module.exports = app;