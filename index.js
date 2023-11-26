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
  // Obtenha os dados do formulário do corpo da solicitação
  const nome = req.body.nome;
  const email = req.body.email;
  const telefone = req.body.telefone;
  const dataNascimento = req.body.dataNascimento;
  const genero = req.body.genero;
  const interesses = req.body.interesses;

  // Validar os dados do formulário
  const errors = [];
  if (!nome) errors.push('Nome é obrigatório.');
  if (!email || !isValidEmail(email)) errors.push('Email inválido.');
  if (!telefone || !isValidPhone(telefone)) errors.push('Telefone inválido.');
  if (!dataNascimento) errors.push('Data de Nascimento é obrigatória.');

  // Se houver erros, renderizar o formulário com mensagens de erro
  if (errors.length > 0) {
    return res.status(400).sendFile(path.join(__dirname, 'public', 'index.html'));
  }

  // Se não houver erros, enviar uma resposta de sucesso
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
// Função auxiliar para validar o formato do e-mail
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Função auxiliar para validar o formato do número de telefone
function validarFormulario() {
  const telefoneInput = document.getElementById('telefone');
  const telefoneValue = telefoneInput.value.replace(/\D/g, ''); // Remover não dígitos

  // Validar se o telefone tem 10 dígitos
  if (telefoneValue.length !== 10) {
    alert('Por favor, insira um número de telefone válido.');
    return false; // Impede o envio do formulário
  }

  return true; // Permite o envio do formulário
}
