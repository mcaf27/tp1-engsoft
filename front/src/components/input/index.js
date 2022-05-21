import styles from './styles.module.css';

export const TextField = ({ label, id, errorMsg, ...rest }) => {
  return (
    <div
      className={[styles.inputContainer, !!errorMsg && styles.inputError].join(
        ' '
      )}
    >
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} {...rest} />
      {!!errorMsg && <span>{errorMsg}</span>}
    </div>
  );
};

export const Select = ({
  value,
  id,
  onChange,
  placeholder,
  children,
  errorMsg,
  label,
  ...rest
}) => {
  return (
    <div
      className={[styles.inputContainer, !!errorMsg && styles.inputError].join(
        ' '
      )}
    >
      <label htmlFor={id}>{label}</label>
      <select id={id} value={value} onChange={onChange} {...rest}>
        <option hidden>{placeholder}</option>
        {children}
      </select>
      {!!errorMsg && <span>{errorMsg}</span>}
    </div>
  );
};
