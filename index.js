const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});


app.post('/cadastro', (req, res) => {
  const nome = req.body.nome;
  const email = req.body.email;

  
 
  res.send(`Cadastro realizado com sucesso! Nome: ${nome}, Email: ${email}`);
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
