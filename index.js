const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.post('/cadastro', (req, res) => {
  const nome = req.body.nome;
  const email = req.body.email;
  const telefone = req.body.telefone;
  const dataNascimento = req.body.dataNascimento;
  const genero = req.body.genero;
  const interesses = req.body.interesses;

 

 
  res.send(`Cadastro realizado com sucesso!
    Nome: ${nome},
    Email: ${email},
    Telefone: ${telefone},
    Data de Nascimento: ${dataNascimento},
    Gênero: ${genero},
    Interesses: ${interesses}`);
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
