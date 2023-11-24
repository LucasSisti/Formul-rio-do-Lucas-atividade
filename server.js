const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Configurar o middleware para analisar dados do formulário
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rota para lidar com o envio do formulário
app.post('/cadastro', (req, res) => {
    const dados = req.body;
    console.log('Dados do formulário:', dados);
    // Aqui você pode processar os dados como quiser
    // e responder ao cliente conforme necessário
    res.send('Formulário recebido com sucesso!');
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
