import styles from './styles.module.css';

export default function Button({ onClick, className, disabled = false, text }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={[styles.button, className].join(' ')}
    >
      {text}
    </button>
  );
}
