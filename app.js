require("dotenv").config();

const express = require('express');

const db = require("./db.js")

const app = express();

app.get('/', async (req, res) => {
    const clientes = await db.verClientes();
    res.json(clientes);
})

app.listen(3000);

console.log("Rodando...🔥")