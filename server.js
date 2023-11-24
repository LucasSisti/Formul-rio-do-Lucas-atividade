const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para processar dados POST
app.use(bodyParser.urlencoded({ extended: true }));

// Servir arquivos estáticos (como o HTML)
app.use(express.static(path.join(__dirname, 'public')));

// Rota para lidar com o formulário POST
app.post('/processar-formulario', function (req, res) {
    // Obter dados do corpo da solicitação
    const nome = req.body.txtnome;
    const dtNascimento = req.body.txtdtnascimento;
    const senha = req.body.txtsenha;
    const senhaConfirmacao = req.body.txtsenhaconfirmacao;

    // Adicione suas validações do lado do servidor aqui, se necessário

    // Renderizar o próprio formulário com mensagens de validação (em um projeto real, você pode usar um mecanismo de modelo)
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciar o servidor na porta especificada
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

// Código de validação do lado do cliente (em um script separado ou dentro do arquivo HTML)
document.addEventListener('DOMContentLoaded', function () {
    var form = document.forms['cadastro'];
    form.addEventListener('submit', function (event) {
        // Validar o nome
        var nome = form['txtnome'].value.trim();
        if (nome === '') {
            alert('Por favor, digite seu nome.');
            event.preventDefault();
            return;
        }

        // Validar a data de nascimento
        var dtNascimento = form['txtdtnascimento'].value.trim();
        if (!validarDataNascimento(dtNascimento)) {
            alert('Por favor, digite uma data de nascimento válida no formato DD/MM/AAAA.');
            event.preventDefault();
            return;
        }

        // Validar senha
        var senha = form['txtsenha'].value;
        var senhaConfirmacao = form['txtsenhaconfirmacao'].value;
        if (senha.length < 7 || senha.length > 14 || senha !== senhaConfirmacao) {
            alert('A senha deve ter entre 7 e 14 caracteres e as senhas devem coincidir.');
            event.preventDefault();
            return;
        }

        // Validar escolha de animais
        var opcaoAnimal = form['opcaoanimal'];
        var selecionado = false;
        for (var i = 0; i < opcaoAnimal.length; i++) {
            if (opcaoAnimal[i].checked) {
                selecionado = true;
                break;
            }
        }
        if (!selecionado) {
            alert('Por favor, selecione pelo menos um tipo de animal para adoção.');
            event.preventDefault();
            return;
        }

        // Se tudo estiver correto, o formulário será enviado
    });

    // Função para validar a data de nascimento no formato DD/MM/AAAA
    function validarDataNascimento(data) {
        var regexData = /^\d{2}\/\d{2}\/\d{4}$/;
        return regexData.test(data);
    }
});
