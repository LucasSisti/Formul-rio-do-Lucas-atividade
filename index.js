<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Formulário de Cadastro</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
    }

    form {
      background-color: #fff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      width: 400px;
      box-sizing: border-box;
    }

    label {
      display: block;
      margin-bottom: 8px;
      font-weight: bold;
    }

    input, select {
      width: 100%;
      padding: 10px;
      margin-bottom: 16px;
      box-sizing: border-box;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 16px;
    }

    input[type="email"], input[type="tel"] {
      background-color: #f2f8f5;
    }

    button {
      background-color: #4caf50;
      color: white;
      padding: 10px 15px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
    }

    button:hover {
      background-color: #45a049;
    }
  </style>
</head>
<body>

  <form action="/cadastro" method="post" onsubmit="return validarFormulario()">
    <h1>Formulário de Cadastro de Usuário</h1>
  
    <label for="nome">Nome:</label>
    <input type="text" id="nome" name="nome">
  
    <label for="email">Email:</label>
    <input type="email" id="email" name="email">
  
    <label for="telefone">Telefone:</label>
    <input type="tel" id="telefone" name="telefone" placeholder="Digite o telefone" title="Formato de telefone inválido" maxlength="15">
  
    <label for="dataNascimento">Data de Nascimento:</label>
    <input type="date" id="dataNascimento" name="dataNascimento">
  
    <label for="genero">Gênero:</label>
    <select id="genero" name="genero">
      <option value="masculino">Masculino</option>
      <option value="feminino">Feminino</option>
      <option value="outro">Outro</option>
    </select>
  
    <label for="interesses">Interesses:</label>
    <input type="text" id="interesses" name="interesses" placeholder="Separe os interesses por vírgula">
  
    <button type="submit">Cadastrar</button>
  </form>

</body>
</html>
