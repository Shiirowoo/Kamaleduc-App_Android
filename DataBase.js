const mysql = require('mysql')
const { AppRegistry } = require('react-native')

const connection = mysql.createConnection({
    host: 'kamaleduc.c92cwsukwoqy.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'kamaleduc',
    database: 'kamaleduc'
})

connection.connect((err) => {
    if (err) throw err;
    console.log('Conexão com o banco de dados MySQL estabelecida!');
  })

const cadastrar = (nome,senha,email,nasc) => {
    const queryString = `INSERT INTO users (nome, senha, email, nasc) VALUES ('${nome}','${senha}','${email}','${nasc}')`;
    connection.query(queryString, [nome, email, senha, nasc], (err, result) => {
        if (err) {
        console.error('Erro ao inserir o cadastro:', err)
        res.status(500).send('Erro ao inserir o cadastro')
        return
        }
        console.log('Cadastro criado com sucesso!')
        res.status(201).send('Cadastro criado com sucesso!')
    })
} 


AppRegistry.registerComponent('BD', () => BD)
