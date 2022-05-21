import { Link } from 'react-router-dom';

import styles from './styles.module.css';

export default function Button({
  onClick,
  className,
  disabled = false,
  href,
  text,
}) {
  if (!href)
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={[styles.button, className].join(' ')}
      >
        {text}
      </button>
    );

  return (
    <Link
      to={href}
      disabled={disabled}
      className={[styles.button, className].join(' ')}
    >
      {text}
    </Link>
  );
}
