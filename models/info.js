const db = require('../config/db');
const information = {
    save:(data, callback) =>{
        const query = "insert into users (username, email, password, name, birthday, gender) values(?,?,?,?,?,?)";
        db.query(query, [data.username, data.email, data.password, data.name, data.birthday, data.gender], callback);
    },
    findUserByEmail: (email, callback) => {
        const query = "SELECT * FROM users WHERE email = ?";
        db.query(query, [email], callback);
    }

};

module.exports = information;