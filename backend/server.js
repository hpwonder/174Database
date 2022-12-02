const express = require("express"); 
const bodyParser = require('body-parser')
const app = express();
const mysql = require('mysql')
const cors = require('cors'); 


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Hpw@nders23",
    database: "video_database",
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

app.get("/api/get", (req,res) => {
    const sqlSelect = "SELECT * FROM video_provider";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

app.post("/api/insert", (req, res)=> {
    const providerName = req.body.providerName

    const sqlInsert = "INSERT INTO video_provider (provider_url) VALUES (?)";

    db.query(sqlInsert, [providerName], (err, result)=> {
        console.log(result);
    });

});

app.listen(3001, () =>
{
    console.log("running on port 3001");
});

