const orm = require("./config/orm");

// reference: queryString = "SELECT * FROM ?? WHERE ?? = ?";
// select "grown-up" parties
var data = orm.selectWhere("parties", "party_type", "grown-up");


// reference: queryString = "SELECT ?? FROM ?? ORDER BY ?? DESC";
// list party names in order of cost, from highest to lowest cost
var data = orm.selectAndOrder("party_name", "parties", "party_cost");


// reference: queryString = "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";
// find which client has had the most parties
var data = orm.findWhoHasMost("client_name", "client_id", "clients", "parties");
