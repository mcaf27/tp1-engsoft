async function syncDatabase(){
  const User = require('./../models/User');
  await User.sync({ force: true });

  const Book = require('./../models/Book');
  await Book.sync({ force: true });

  const BookUser = require('./../models/BookUser');
  await BookUser.sync({ force: true });
}

syncDatabase();