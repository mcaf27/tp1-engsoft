import styles from './styles.module.css';

export default function Book({ cover, title, author, genre }) {
  return (
    <div className={styles.book}>
      <img src={cover} alt={title} />
      <div className={styles.overlay}>
        <p className={styles.title}>{title}</p>
        <p className={styles.author}>{author}</p>
        <p className={styles.genre}>{genre}</p>
      </div>
    </div>
  );
}
