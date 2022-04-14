import Alert from '@mui/material/Alert';
import styles from './styles.module.scss';

export default function CustomAlert({ open, message, type }) {
  return (
    <>
      {' '}
      {open

        && (
          <Alert
            variant="standard"
            severity={type}
            className={`${styles['container-alert']} ${styles[type || 'error']}`}
          >
            {message}
          </Alert>
        )}
    </>
  );
}
