var mysql = require("mysql");
function REST_ROUTER(router, connection, md5) {
    var self = this;
    self.handleRoutes(router, connection, md5);
}

REST_ROUTER.prototype.handleRoutes= function(router,connection,md5) {

    //Get Coinslots
    router.get("/coinslot",function(req,res){
        var query = "SELECT * FROM ?? ";
        var table = ["coinslot"];
        query = mysql.format(query,table);
        connection.query(query, function(err, rows){
            if(err) {
                res.json({"error" : true, "message" : "Error executing MySQL query"});
            } else {
                res.json({"error" : false, "message" : "success", "coinslots" : rows});
            }
        });
    });

}

module.exports = REST_ROUTER;
