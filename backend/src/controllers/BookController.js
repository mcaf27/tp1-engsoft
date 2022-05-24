const User = require("../models/User");
const Book = require("../models/Book");
const BookUser = require("../models/BookUser");

const jwt = require("jsonwebtoken");

module.exports = {
  async cadastro(req, res) {
    const { user_id, title, author, cover, genre } = req.body;

    const book = await Book.create({
      user_id: user_id,
      title: title,
      author: author,
      cover: cover,
      genre: genre,
      sum: 0,
      avaliations: 0,
      score: 0,
    });
    return res.json(book);
  },

  async avaliar(req, res) {
    const { book_id, score } = req.body;

    const current = await Book.findOne({
      where: {
        id: book_id,
      },
    });

    let newSum = parseInt(current.sum) + parseInt(score);
    let newAvaliations = parseInt(current.avaliations) + 1;
    let newScore = parseFloat(newSum / newAvaliations);

    console.log(newSum, newAvaliations, newScore);

    await Book.update(
      {
        sum: newSum,
        avaliations: newAvaliations,
        score: newScore,
      },
      {
        where: {
          id: current.id,
        },
      }
    );
    return res.status(200).end();
  },

  async listar(req, res) {
    const { user_id, book_id } = req.body;
    console.log(user_id, book_id);
    const wish = await BookUser.create({
      user_id: user_id,
      book_id: book_id,
    });
    return res.json(wish);
  },
};
