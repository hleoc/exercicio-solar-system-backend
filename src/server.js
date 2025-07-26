const app = require('./app');

const porta = 3002;

app.listen(porta, () => console.log(`O pai tá ON na porta - ${porta}`));