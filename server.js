var app = require('express')(); // Express App include
var http = require('http').Server(app); // http server
var mysql = require('mysql'); // Mysql include
var bodyParser = require("body-parser"); // Body parser for fetch posted data
var connection = mysql.createConnection({ // Mysql Connection
    host : 'localhost',
    user : 'coinslot_user',
    password : 'AzErTy_123456',
    database : 'coinslot_db',
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // Body parser use JSON data
app.get('/coinslot',function(req,res){
    var data = {
        "coinslot":0,
        "maintaince_crew":"",
        "manufacturer":"",
        "payments":0,
        "payment_method":0
    };

    connection.query("SELECT * from coinslot",function(err, rows, fields){
        if(rows.length != 0){
            data["coinslot"] = 0;
            data["maintaince_crew"] = rows;
            data["manufacturer"] = rows;
            data["payments"] = rows;
            data["payment_method"] = rows;
            res.json(data);
        }else{
            data["coinslot"] = 'No results';
            res.json(data);
        }
    });
});
