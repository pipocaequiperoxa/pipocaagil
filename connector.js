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

    pool.query('INSERT INTO users (username, email, password, birth_date) VALUES ($1, $2, crypt($3, gen_salt("bf")), $4)', [username, email, password, birthDate,], (error, results) => {
        if (error) {
            console.log(error);
            throw error;
        }
        response.status(201).send(`User added with ID: ${results.insertId}`);
    })
}

module.exports = { createUser};