import { useState, useEffect } from 'react';

import {
  Container,
  Typography,
  Stack,
  Button,
  Card,
  Box,
  Dialog,
  TextField,
  Chip,
  Pagination,
} from '@mui/material';
import Book from '../../components/book';

import data from '../../books.json';

import Add from '@mui/icons-material/AddCircleRounded';

const genres = [
  'Suspense',
  'Romance',
  'Ficção Científica',
  'Fantasia',
  'História',
  'Ação e aventura',
  'Político',
  'Computação',
  'Aventura',
  'Terror',
  'Drama',
  'Psicologia',
  'Ciência',
];

export default function Books() {
  const [books, setBooks] = useState(data);

  const [selectedGenre, setSelectedGenre] = useState('');
  const [genreFilterResults, setGenreFilterResults] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  const booksPerPage = 20;

  const indexLastBook = currentPage * booksPerPage;
  const indexFirstBook = indexLastBook - booksPerPage;
  const currentBooks = (genreFilterResults.length > 0 ? genreFilterResults : books).slice(
    indexFirstBook,
    indexLastBook
  );

  const [newBookModalOpen, setNewBookModalOpen] = useState(false);

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [cover, setCover] = useState('');

  const [titleError, setTitleError] = useState('');
  const [authorError, setAuthorError] = useState('');
  const [genreError, setGenreError] = useState('');
  const [coverError, setCoverError] = useState('');

  const validateNewBook = () => {
    let newBook = true;

    if (!title) {
      setTitleError('O livro precisa de um título.');
    } else {
      const titles = books.map((b) => b.Título);
      if (titles.includes(title)) {
        setTitleError('Esse livro já existe aqui.');
        newBook = false;
      }
    }

    if (!author) setAuthorError('O livro precisa de um autor.');
    if (!genre) setGenreError('O livro precisa de um gênero.');
    if (!cover) setCoverError('O livro precisa de uma capa.');

    if (!!title && !!author && !!genre && !!cover) return true && newBook;
    else return false;
  };

  useEffect(() => {
    console.log(selectedGenre);
    if (selectedGenre === '') setGenreFilterResults([]);
    else setGenreFilterResults(books.filter((b) => b.Gênero === selectedGenre));
    console.log(books.filter((b) => b.Gênero === selectedGenre));
  }, [selectedGenre]);

  return (
    <>
      <Container maxWidth="md">
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h2" sx={{ fontSize: '2rem' }}>
            Livros
          </Typography>
          <Button
            variant="contained"
            sx={{ letterSpacing: '1px' }}
            onClick={() => {
              setNewBookModalOpen(true);
              setGenreFilterResults([]);
            }}
          >
            cadastrar novo livro
          </Button>
        </Stack>
        <Card sx={{ p: 3, my: 3 }}>
          <Stack direction="row" gap={1} flexWrap="wrap" mb={3}>
            <Typography component="span">Filtre por gênero:</Typography>
            {genres.map((genre, index) => (
              <Chip
                label={genre}
                onClick={() =>
                  genre === selectedGenre ? setSelectedGenre('') : setSelectedGenre(genre)
                }
                key={index}
                sx={{ opacity: 0.9 }}
                color={genre === selectedGenre ? 'secondary' : 'default'}
              />
            ))}
          </Stack>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              justifyContent: 'center',
              gap: 3,
            }}
          >
            {/* (genreFilterResults.length > 0 ? genreFilterResults : books) */}
            {currentBooks.map((book) => (
              <Book
                cover={book.Capa}
                title={book.Título}
                author={book.Autor}
                genre={book.Gênero}
                key={book.ID_Livro}
              />
            ))}
          </Box>
          <Stack direction="row" justifyContent="center" mt={3}>
            <Pagination
              count={Math.ceil(
                (genreFilterResults.length > 0 ? genreFilterResults : books).length / booksPerPage
              )}
              page={currentPage}
              color="primary"
              onChange={(_, n) => {
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                });
                setCurrentPage(n);
              }}
            />
          </Stack>
        </Card>
      </Container>

      <Dialog
        open={newBookModalOpen}
        onClose={() => {
          setNewBookModalOpen(false);
          setTitle('');
          setAuthor('');
          setGenre('');
          setCover('');
          setTitleError('');
          setAuthorError('');
          setGenreError('');
          setCoverError('');
        }}
      >
        <Stack sx={{ p: 5 }} gap={2}>
          <Typography
            variant="h5"
            sx={{
              px: 3,
              mb: 1,
            }}
          >
            cadastrar novo livro:
          </Typography>
          <TextField
            label="Título"
            id="titulo"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              setTitleError('');
            }}
            placeholder="Insira o título do livro"
            error={!!titleError}
            helperText={titleError}
          />

          <TextField
            label="Autor"
            id="autor"
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
              setAuthorError('');
            }}
            placeholder="Insira o autor do livro"
            error={!!authorError}
            helperText={authorError}
          />

          <TextField
            value={genre}
            onChange={(e) => {
              setGenre(e.target.value);
              setGenreError('');
            }}
            error={!!genreError}
            helperText={genreError}
            label="Gênero"
            select
            SelectProps={{
              native: true,
              defaultValue: 'none',
              sx: { color: genreError ? 'error.main' : 'currentcolor' },
            }}
            onClick={() => setGenreError('')}
          >
            <option hidden>Selecione uma opção</option>
            {genres.map((g, index) => (
              <option key={index} value={genre}>
                {genre}
              </option>
            ))}
          </TextField>

          <TextField
            label="URL da capa"
            id="capa"
            value={cover}
            onChange={(e) => {
              setCover(e.target.value);
              setCoverError('');
            }}
            placeholder="Insira a URL da capa do livro"
            error={!!coverError}
            helperText={coverError}
          />

          <Button
            variant="contained"
            color="secondary"
            sx={{ width: 'fit-content', lineHeight: '120%', mx: 'auto', mt: 1 }}
            endIcon={<Add />}
            onClick={() => {
              const valid = validateNewBook();
              if (!valid) return;

              setBooks([
                {
                  Título: title,
                  ID_Livro: books.length + 1,
                  Autor: author,
                  Gênero: genre,
                  Capa: cover,
                },
                ...books,
              ]);
              setNewBookModalOpen(false);
            }}
          >
            enviar
          </Button>
        </Stack>
      </Dialog>
    </>
  );
}
