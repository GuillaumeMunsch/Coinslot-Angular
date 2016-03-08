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

  //Get Coinslot by id
  router.get("/coinslot/:idcoinslot",function(req,res){
      var query = "SELECT * FROM ?? WHERE ??=?";
      var table = ["coinslot", "idcoinslot", req.params.idcoinslot];
      query = mysql.format(query,table);
      connection.query(query, function(err, rows){
          if(err) {
              res.json({"error" : true, "message" : "Error executing MySQL query"});
          } else {
              res.json({"error" : false, "message" : "success", "coinslot" : rows});
          }
      });
  });

  //Get payments by coinslot id
  router.get("/coinslot/:idcoinslot/payments",function(req,res){
      var query = "SELECT * FROM ?? INNER JOIN ?? ON ?? = ?? WHERE ?? = ?";
      var table = ["coinslot", "payments", "payments.fk_id_coinslot", "coinslot.idcoinslot", "coinslot.idcoinslot", req.params.idcoinslot];
      query = mysql.format(query,table);
      connection.query(query, function(err, rows){
          if(err) {
              res.json({"error" : true, "message" : "Error executing MySQL query"});
          } else {
              res.json({"error" : false, "message" : "success", "coinslot" : rows});
          }
      });
  });

  //Get payments
  router.get("/payments",function(req,res){
      var query = "SELECT * FROM ??";
      var table = ["payments"];
      query = mysql.format(query,table);
      connection.query(query, function(err, rows){
          if(err) {
              res.json({"error" : true, "message" : "Error executing MySQL query"});
          } else {
              res.json({"error" : false, "message" : "success", "payments" : rows});
          }
      });
  });

  //Get payment by id
  router.get("/payments/:idpayment",function(req,res){
      var query = "SELECT * FROM ?? WHERE ??=?";
      var table = ["payments", "idpayment", req.params.idpayment];
      query = mysql.format(query,table);
      connection.query(query, function(err, rows){
          if(err) {
              res.json({"error" : true, "message" : "Error executing MySQL query"});
          } else {
              res.json({"error" : false, "message" : "success", "payment" : rows});
          }
      });
  });

  //Get payment type with id
  router.get("/payment_method/:idmethod", function(req, res){
    var query = "SELECT * FROM ?? WHERE ??=?";
    var table = ["payments_method", "id", req.params.idmethod];
    query = mysql.format(query, table);
    connection.query(query, function(err, rows){
      if (err) {
        res.json({"error" : true, "message" : "Error executing MySQL query"});
      } else {
        res.json({"error" : false, "message" : "success", "payment_method" : rows});
      }
    })

  //Get info by coinslot id
  router.get("/coinslot/:idcoinslot/infos",function(req,res){
      var query = "SELECT * FROM ?? INNER JOIN ?? ON ?? = ?? INNER JOIN ?? ON ?? = ?? WHERE ?? = ?";
      var table = [
       "coinslot",
       "manufacturer",
       "manufacturer.phone_number",
       "coinslot.fk_id_manufacturer",
       "maintaince_crew",
       "coinslot.fk_id_maintaince_crew",
       "maintaince_crew.phone",
       "coinslot.idcoinslot",
       req.params.idcoinslot
      ];
      query = mysql.format(query,table);
      connection.query(query, function(err, rows){
          if(err) {
              res.json({"error" : true, "message" : "Error executing MySQL query"});
          } else {
              res.json({"error" : false, "message" : "success", "infos" : rows});
          }
      });
  });

}

module.exports = REST_ROUTER;
