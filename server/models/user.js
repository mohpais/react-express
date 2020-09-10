'user strict';
const config = require('../conf');
const sql = config.conn;

//Users object constructor
const User = function(user) {
    this.profile_id = user.profile_id;
    this.role = user.role;
    this.username = user.username;
    this.password = user.password;
    this.created_at = user.created_at;
};

User.getAllUser = function(result) {
    sql.query("SELECT * FROM users", function(err, res) {
        if (err) {
            console.log("error: ", err);
        } else {
            console.log('users : ', res);
            result(null, res)
        }
    });
}

User.createUser = function(newUser, result) {
    sql.query("INSERT INTO users set ?", newUser, function(err, res) {
        if (err) {
            console.log("error: ", err);
        } else {
            console.log(res.insertId);
            result(null, res.insertId)
        }
    })
}

module.exports = User;

