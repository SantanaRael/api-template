async function connect(){

    if(global.connection){
        return global.connection.connect();
    }
    const { Pool } = require("pg");
    const pool = new Pool({
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        password: process.env.DB_PASS,
        port: process.env.DB_PORT,
    });
    
    global.connection = pool;
    return pool.connect();

}

connect();

//é necessario está conectado em um banco que tenha a tabela "clientes"
async function verClientes(){
    const client = await connect();
    const res = await client.query("SELECT * FROM clientes")
    return res.rows;
}

module.exports = {
    verClientes
}