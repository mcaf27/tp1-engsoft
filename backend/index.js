// Libraries
const express = require('express');
const app = express();
const cors = require('cors'); 
const bodyParser = require('body-parser');
const databaseConnection = require('./database/connection');
const BCrypt = require('./helpers/bcrypt');

// Configs
databaseConnection.authenticate()
                  .then(() => console.log('DB connected!'))
                  .catch((error) => { throw new Error(error); });
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Models
const User = require('./models/User');

// Helpers
function badRequest(res, error = nil){
  res.statusCode = 400;
  res.json({
    error: error || 'Bad request' 
  });
}

function success(res, json){
  res.statusCode = 200;
  res.json(json);
}

function notFound(res){
  res.statusCode = 404;
  res.json({
    error: 'Not Found'
  });
}

async function currentUser(req){
  const token = req.headers['access-token'];
  var user = null;
  if(token){
    user = await User.findOne({ where: { loginToken: token } });
  }
  return user;
}

function generateLoginToken(){
  var user, token;
  do {
    token = Math.floor(Math.random()*9000000000) + 1000000000;
    token = token.toString();
    User.findOne({ where: { loginToken: token } }).then( user_ => {
      user = user_;
    });
  } while (user);
  return token;
}

app.get('/', (req, res) => {
  currentUser(req).then( currentUser_ => {
    success(res, {
      message: 'Jacks API',
      currentUser: currentUser_
    });
  });
});

// User signup
app.post('/users', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) { badRequest(res) }
  
  User.create({
    email,
    password
  }).then(user => {
    user.update({loginToken: generateLoginToken()})
        .then(user => success(res, user))
        .catch(error => badRequest(res, error));
  }).catch(error => badRequest(res, error));
});

// Books signup
app.post('/books', (req, res) => {
  const { title, author, editor, genre, coverImage } = req.body;
  
  Book.create({
    title,
    author,
    editor,
    genre,
    coverImage
  }).then(book => {
    success(res, book);
  }).catch(error => badRequest(res, error));
});

// Criar rota para adicionar um livro à lista de desejos. Nessa voce relaciona (https://sequelize.org/docs/v6/core-concepts/model-querying-finders/#findorcreate) o currentUser com o livro informado no body e passa a flag de desejado pra true.

// Criar rota para dar nota a um livro. Nessa voce relaciona (https://sequelize.org/docs/v6/core-concepts/model-querying-finders/#findorcreate) o currentUser com o livro informado no body e coloca a nota informada no body.

// User login
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email) { badRequest(res, "Missing email") }
  if (!password) { badRequest(res, "Missing password") }

  var password_ = BCrypt.hashSync(password);

  User.findOne({ where: { email } }).then(user => {
    if(user && user.encryptedPassword === password_){
      user.update({ loginToken: generateLoginToken() })
          .then(user => success(res, user))
          .catch(error => badRequest(res, "Invalid email or password"));
    } else {
      badRequest(res, "Invalid email or password");
    }
  }).catch(error => "Invalid email or password");
});

app.listen(3001, () => {
  console.log('Server running');
});
