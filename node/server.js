const express = require('express')
const app = express()
const port = 3000

const config = {
    host: 'mysql',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const mysql = require('mysql2')
const connection = mysql.createConnection(config)

const sqlCreate = 'CREATE TABLE IF NOT EXISTS people(id int not null auto_increment, name varchar(255), primary key(id))'
connection.query(sqlCreate)

const sqlInsert = `INSERT INTO people(name) values('Ulysses Santos')`
connection.query(sqlInsert)

const sqlSelect = `SELECT * FROM people`
var nomes = ''

connection.query(sqlSelect, function(err, res){
    if(err) throw err
    Object.keys(res).forEach(function(key){
        nomes += `<li>${res[key].name}</li>`
    })
});

connection.end()

app.get('/', (req, res) => {
    res.send('<h1>Full Cycle Rocks!</h1><ul>' + nomes + '</ul>')
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})