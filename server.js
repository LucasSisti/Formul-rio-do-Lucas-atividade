const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Função para validar dados do formulário
function validarDados(dados) {
    // Verificar se campos obrigatórios estão preenchidos
    if (!dados.txtnome || !dados.txtend || !dados.txte-mail || !dados.txtdtnascimento || !dados.txtsenha || !dados.txtsenhaconfirmacao || !dados.opcaosexo || !dados.opcaoanimal) {
        return 'Todos os campos obrigatórios devem ser preenchidos.';
    }

    // Verificar se as senhas estão certas
    if (dados.txtsenha !== dados.txtsenhaconfirmacao) {
        return 'As senhas não correspondem.';
    }

    // Verificar o formato da data de nascimento (assumindo formato DD/MM/AAAA)
    const regexDataNascimento = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!regexDataNascimento.test(dados.txtdtnascimento)) {
        return 'Formato de data de nascimento inválido. Use o formato DD/MM/AAAA.';
    }

    // Verificando o formato do e-mail
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(dados.txte-mail)) {
        return 'Formato de e-mail inválido.';
    }

    return null; // Retorna null se não tiver erros 
}

app.post('/cadastro', (req, res) => {
    const dados = req.body;

    // Validar dados
    const erroValidacao = validarDados(dados);
    if (erroValidacao) {
          return res.send(`Erro de validação: ${erroValidacao}`);
    }

    console.log('Dados do formulário:', dados);
    res.send('Formulário recebido com sucesso!');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
