import express from 'express';
import cors from 'cors';
import sequelize from './config/db.js';
import db from './config/db.js';
import livroRoutes from './routes/livro_routes.js';

const server = express();

server.use(express.json());
server.use(cors());

try {
    await db.authenticate();
    console.log("Conexão com o Mysql estabelecida");
} catch (e) {
    console.log("Conexão com o Mysql Não estabelecida", e);
}

server.use('/api', livroRoutes);

server.listen(4000, () => console.log("servidor executando em http://localhost:4000"));