import { useState, useEffect } from "react";

import { listagemMeusLivros } from "../../services/bookService";
import { listagemDesejo } from "../../services/bookService";

import BookListItem from "../../components/bookListItem";
import Book from "../../components/book";

import data from "../../books.json";

import { Container, Card, Typography, Box, List } from "@mui/material";

export default function Library() {

  const [books, setBooks] = useState("");
  const [wish, setWish] = useState("");

  const [wishlist] = useState(data.slice(10, 20));
  const [suggestions] = useState(data.slice(20, 25));

  const myFunction = async () => {
    const promise = await listagemMeusLivros();
    setBooks(promise);
    const promiseWish = await listagemDesejo();
    setWish(promiseWish);
    console.log(promiseWish);
  };

  useEffect(() => {
    myFunction();
  }, []);
  
  return (
    <Container maxWidth="md" sx={{ mb: 10 }}>
      <Typography variant="h2" sx={{ fontSize: "2rem" }}>
        Minha biblioteca
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
          gap: 3,
          my: 3,
        }}
      >
        <Card sx={{ p: 3 }}>
          <Typography variant="h6">Meus livros</Typography>
          <List
            sx={{
              overflowY: "auto",
              height: 300,
              mt: 1,
            }}
          >
            {books &&
              books.map((value, key) => {
                return (
                  <BookListItem
                    cover={value.cover}
                    title={value.title}
                    author={value.author}
                    genre={value.genre}
                    key={value.id}
                  />
                );
              })}
          </List>
        </Card>

        <Card sx={{ p: 3 }}>
          <Typography variant="h6">Minha lista de desejos</Typography>
          <List
            sx={{
              overflowY: "auto",
              height: 300,
              mt: 1,
            }}
          >
            {wish &&
              wish.map((value, key) => {
                return (
                  <BookListItem
                    cover={value.cover}
                    title={value.title}
                    author={value.author}
                    genre={value.genre}
                    key={value.id}
                  />
                );
              })}
          </List>
        </Card>
      </Box>

      <Card sx={{ p: 3 }}>
        <Typography variant="h6" mb={2}>
          Sugestões:
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: 2,
          }}
        >
          {suggestions.map((b) => (
            <Book
              key={b.ID_Livro}
              title={b.Título}
              cover={b.Capa}
              genre={b.Genre}
              author={b.Autor}
            />
          ))}
        </Box>
      </Card>
    </Container>
  );
}
