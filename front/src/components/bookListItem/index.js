import styles from './styles.module.css';

const BookListItem = ({ cover, author, title, genre }) => {
  return (
    <div className={styles.book}>
      <img src={cover} />
      <div className={styles.bookInfo}>
        <p className={styles.title}>{title}</p>
        <p className={styles.author}>{author}</p>
        <p className={styles.genre}>{genre}</p>
      </div>
    </div>
  );
};

export default BookListItem;
