const express = require("express"); 
const bodyParser = require('body-parser')
const app = express();
const mysql = require('mysql')
const cors = require('cors'); 


const db = mysql.createConnection({
    host: "us-cdbr-east-06.cleardb.net",
    user: "b02c468b43712f",
    password: "0f50b023",
    database: "heroku_f8fe4bdcb79e1bd",
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("build"));
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

app.listen(process.env.PORT | PORT , () =>
{
    console.log(`running on port ${PORT}`);
});

