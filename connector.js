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


const createUser =  async (request, response) => {
    const { username, email, password, birthDate } = request.body
    const query = {
        text: `INSERT INTO users(email, password, username, birth_date) VALUES($1, crypt($2, gen_salt('bf')), $3, $4)`,
        values: [email, password, username, birthDate],
      }

      try {
        await pool.query(query);
        // response.status(201).send(`User added with ID: ${results.insertId}`);

        response.json({"Messagem":'Usuário adicionado com sucesso', "email" : email});

      } catch (error) {
        console.log("ERROR", error);
      }


    // await pool.query(query), (error, results) => {
       
    //     if (error) {
    //         console.log(error);
    //         throw error;
    //     }
    //     // response.status(201).send(`User added with ID: ${results.insertId}`);
    //     response.json({"Messagem":'Usuário adicionado com sucesso', "email" : email});
    // }
}

module.exports = { createUser};


