import { useState } from 'react';

import Book from '../../components/book';
import Button from '../../components/button';
import Modal from '../../components/modal';
import { TextField, Select } from '../../components/input';

import styles from './styles.module.css';

import data from '../../books.json';

export default function Books() {
  const [newBookModalOpen, setNewBookModalOpen] = useState(false);
  const [books, setBooks] = useState(data);

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

  return (
    <>
      <main className={styles.main}>
        <header>
          <h2>Livros</h2>
          <Button
            className={styles.button}
            onClick={() => setNewBookModalOpen(true)}
            text="cadastrar novo livro"
          />
        </header>
        <div className={styles.content}>
          {books.map((book) => (
            <Book
              cover={book.Capa}
              title={book.Título}
              author={book.Autor}
              genre={book.Gênero}
              key={book.ID_Livro}
            />
          ))}
        </div>
      </main>

      <Modal
        open={newBookModalOpen}
        handleClose={() => {
          setNewBookModalOpen(false);
          setTitle('');
          setAuthor('');
          setGenre('');
          setCover('');
        }}
      >
        <h4
          style={{
            marginBottom: '1rem',
            fontSize: '2rem',
            textAlign: 'center',
          }}
        >
          Cadastrar novo livro
        </h4>
        <TextField
          label="Título"
          id="titulo"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            setTitleError('');
          }}
          placeholder="Insira o título do livro"
          errorMsg={titleError}
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
          errorMsg={authorError}
        />

        <Select
          label="Gênero"
          placeholder="Selecione uma opção"
          id="genero"
          value={genre}
          onChange={(e) => {
            setGenre(e.target.value);
            setGenreError('');
          }}
          errorMsg={genreError}
        >
          <option value="Suspense">Suspense</option>
          <option value="Romance">Romance</option>
          <option value="Ficção científica">Ficção científica</option>
          <option value="Fantasia">Fantasia</option>
          <option value="Histório">Histório</option>
          <option value="Ação e aventura">Ação e aventura</option>
          <option value="Político">Político</option>
          <option value="Computação">Computação</option>
          <option value="Aventura">Aventura</option>
          <option value="Terror">Terror</option>
          <option value="Drama">Drama</option>
          <option value="Psicologia">Psicologia</option>
          <option value="Ciência">Ciência</option>
        </Select>

        <TextField
          label="URL da capa"
          id="capa"
          value={cover}
          onChange={(e) => {
            setCover(e.target.value);
            setCoverError('');
          }}
          placeholder="Insira a URL da capa do livro"
          errorMsg={coverError}
        />

        <Button
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
          text="cadastrar"
          style={{
            // margin: '1rem auto 0',
            marginTop: '1rem',
            width: '100%',
          }}
        />
      </Modal>
    </>
  );
}
