import { useState, useEffect } from 'react';

import { listagem } from '../../services/bookService';

import { cadastrarLivro } from '../../services/bookService';

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
  'Todos',
];

export default function Books() {
  const [books, setBooks] = useState('');
  const [booksF, setBooksF] = useState('');

  const [enviado, setEnviado] = useState(false);

  const [selectedGenre, setSelectedGenre] = useState('');
  const [genreFilterResults, setGenreFilterResults] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  const booksPerPage = 20;

  const [newBookModalOpen, setNewBookModalOpen] = useState(false);

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [cover, setCover] = useState('');

  const [titleError, setTitleError] = useState('');
  const [authorError, setAuthorError] = useState('');
  const [genreError, setGenreError] = useState('');
  const [coverError, setCoverError] = useState('');

  const checkNewBook = () => {
    const titles = books.map((b) => b.Título);
    if (titles.includes(title)) {
      setTitleError('Esse livro já existe aqui.');
      return false;
    }
    return true;
  };

  const checkTitleError = () => {
    if (!title) {
      setTitleError('O livro precisa de um título.');
      return true;
    }
  };

  const checkAuthorError = () => {
    if (!author) {
      setAuthorError('O livro precisa de um autor.');
      return true;
    }
  };

  const checkGenreError = () => {
    if (!genre) {
      setGenreError('O livro precisa de um gênero.');
      return true;
    }
  };

  const checkCoverError = () => {
    if (!cover) {
      setCoverError('O livro precisa de uma capa.');
      return true;
    }
  };

  const validateNewBook = () => {
    let hasError = false;

    hasError = checkTitleError();
    hasError = checkAuthorError();
    hasError = checkGenreError();
    hasError = checkCoverError();

    if (!hasError) return checkNewBook();
    return false;
  };

  const myFunction = async () => {
    const promise = await listagem();
    setBooks(promise);
    setBooksF(promise);
  };

  useEffect(() => {myFunction();}, [enviado]);

  useEffect(() => {
    console.log(selectedGenre);
    if (selectedGenre == 'Todos') {
      setBooksF(books);
    } 
    else if (books) {
      setBooksF(books.filter((b) => b.genre === selectedGenre));
    }
  }, [selectedGenre]);


  return (
    <>
      <Container maxWidth="md">
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h2" sx={{ fontSize: '2rem' }}>
            Livros da Plataforma
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

            {booksF &&
              booksF.map((value, key) => {
                return (
                  <Book
                    id={value.id}
                    cover={value.cover}
                    title={value.title}
                    author={value.author}
                    genre={value.genre}
                    key={value.id}
                    score={value.score}
                  />
                );
              })}
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
              <option key={index} value={g}>
                {g}
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
            onClick={async () => {
              const valid = validateNewBook();
              if (!valid) return;

              const response = await cadastrarLivro(title, author, cover, genre);
              console.log(response);

              setNewBookModalOpen(false);
              setEnviado(!enviado);s
            }}
          >
            enviar
          </Button>
        </Stack>
      </Dialog>
    </>
  );
}
