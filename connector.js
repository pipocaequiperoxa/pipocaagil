const { Pool } = require("pg");
const dotenv = require("dotenv");
dotenv.config();


const pool = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
});


const createUser = (request, response) => {
    const { username, email, password, birthDate } = request.body

    pool.query(`INSERT INTO users  (email, password, username, birth_date) VALUES ('${email}', crypt(${password}, gen_salt('bf')), ${username}, ${birthDate})`), (error, results) => {
        if (error) {
            console.log(error);
            throw error;
        }
        response.status(201).send(`User added with ID: ${results.insertId}`);
    }
}

module.exports = { createUser};


