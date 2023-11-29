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

  
  const errors = [];
  if (!nome) errors.push('Nome é obrigatório.');
  if (!email || !isValidEmail(email)) errors.push('Email inválido.');
  if (!telefone || !isValidPhone(telefone)) errors.push('Telefone inválido.');
  if (!dataNascimento) errors.push('Data de Nascimento é obrigatória.');

 
  if (errors.length > 0) {
    return res.status(400).sendFile(path.join(__dirname, 'public', 'index.html'));
  }

 
  res.send(`Cadastro realizado com sucesso!
    Nome: ${nome},
    Email: ${email},
    Telefone: ${telefone},
    Data de Nascimento: ${dataNascimento},
    Gênero: ${genero},
    Interesses: ${interesses}`);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});


function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}


function isValidPhone(phone) {
  const phoneRegex = /^\(\d{2}\)\s\d{5}-\d{4}$/;

  return phoneRegex.test(phone);
}
