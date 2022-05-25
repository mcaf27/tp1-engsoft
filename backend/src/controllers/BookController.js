const User = require("../models/User");
const Book = require("../models/Book");
const BookUser = require("../models/BookUser");

const jwt = require("jsonwebtoken");

const { Op } = require("sequelize");

module.exports = {
  async cadastro(req, res) {
    const { user_id, title, author, cover, genre } = req.body;

    const book = await Book.create({
      user_id: req.UserId,
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
    const { book_id } = req.body;
  
    const aux = await BookUser.findOne({
      where:{
        user_id: req.UserId,
        book_id: book_id,
      },
    })

    console.log(aux);

    if(aux){
      await aux.destroy();
      return res.json();
    }

    const wish = await BookUser.create({
      user_id: req.UserId,
      book_id: book_id,
    });
    return res.json(wish);
  },

  async ver(req, res) {
    let all = await Book.findAll(
      {
        order:[[
          "id", "desc"
        ]]
      }
    );
    return res.json(all);
  },

  async verLista(req, res) {
    let all = await Book.findAll({
      where: {
        user_id: req.UserId,
      },
      order:[[
        "id", "desc"
      ]]
    });
    return res.json(all);
  },

  async verWish(req, res) {
    let all = await BookUser.findAll({
      where: {
        user_id: req.UserId,
      },
      order:[[
        "id", "desc"
      ]]
    });

    const index = [];

    for(let i in all) {
      if(!index.find((value) => value == all[i].book_id)){
        index.push(all[i].book_id);
      }
    }

    let allWish = await Book.findAll({
      where: {
        id: {
        [Op.in]: index
        }
        },
        order:[[
          "id", "desc"
        ]]
    });

    return res.json(allWish);
  },
};
