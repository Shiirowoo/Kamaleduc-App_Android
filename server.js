// app.js

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Configuração do body-parser para lidar com JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configuração da conexão com o banco de dados MySQL
const connection = mysql.createConnection({
  host: 'kamaleduc.c92cwsukwoqy.us-east-1.rds.amazonaws.com:3306',
  user: 'admin',
  password: 'kamaleduc',
  database: 'kamaleduc'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Conexão com o banco de dados MySQL estabelecida!');
});

// Rota para criar um novo cadastro
app.post('/cadastrar', (req, res) => {
  const { nome, senha, email, nasc } = req.body;
  const queryString = `INSERT INTO users (nome, senha, email, nasc) VALUES ('${nome}','${senha}','${email}','${nasc}')`;
  connection.query(queryString, [nome, email, senha, nasc], (err, result) => {
    if (err) {
      console.error('Erro ao inserir o cadastro:', err);
      res.status(500).send('Erro ao inserir o cadastro');
      return;
    }
    console.log('Cadastro criado com sucesso!');
    res.status(201).send('Cadastro criado com sucesso!');
  });
});

// Rota para acessar todos os cadastros
app.get('/cadastros', (req, res) => {
  const {nome, senha} = req.query;
  const queryString = `SELECT nome, senha FROM users WHERE nome = '${nome}' and senha = '${senha}'`;
  connection.query(queryString, (err, rows) => {
    if (err) {
      console.error('Erro ao buscar os cadastros:', err);
      res.status(500).send('Erro ao buscar os cadastros');
      return;
    }
    console.log('Cadastros encontrados:', rows);
    res.status(200).json(rows);
  });
});

app.get('/check', (req, res) => {
  const {nome, email} = req.query;
  const queryString = `SELECT nome, email FROM users WHERE nome = '${nome}' or email = '${email}'`
  connection.query(queryString, (err, rows) => {
    if (err) {
      console.error('Erro ao buscar os cadastros:', err);
      res.status(500).send('Erro ao buscar os cadastros');
      return;
    }
    console.log('Cadastros encontrados:', rows);
    res.status(200).json(rows);
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
