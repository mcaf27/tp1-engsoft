const express = require('express');
const cors = require('cors');

const UserController = require('./controllers/UserController');
const BookController =  require('./controllers/BookController');
const AuthController =  require('./controllers/AuthController');

const { verifyJWT } = require('./controllers/AuthController');

const routes = express.Router();

routes.use(cors());

routes.post('/login', AuthController.login);

routes.post('/user/cadastro', UserController.cadastro);

routes.post('/book/cadastro', verifyJWT, BookController.cadastro);

routes.post('/book/avaliar', verifyJWT, BookController.avaliar);

routes.post('/book/listar', verifyJWT, BookController.listar);

module.exports = routes;