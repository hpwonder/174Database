const express = require("express");
const mysql = require("mysql");

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

let connection = mysql.createConnection
({
    host: 'localhost',
    port: 3001,
    user: 'root',
    password: 'Hpw@nders23',
    database: 'online_vid_database'
});

connection.connect(function(err)
{
    if (err) throw err;
});

app.listen(3001, () =>
{
    console.log("Successful Connection");
});

app.get('/test', (req,res) => 
{
    connection.query('SELECT * FROM buys', (err,result)=>
    {
    if(err)throw err;
    else{res.json(result);}
    })
});