import { IconButton, SvgIcon } from '@mui/material';
import Alert from '@mui/material/Alert';
import { useStores } from 'stores';
import styles from './styles.module.scss';
import { ReactComponent as CloseIcon } from '../../assets/close-icon.svg';

export default function CustomAlert({ open, message, type }) {
  const { utilsStore: { setAlert } } = useStores();
  return (
    <>
      {' '}
      {open
        && (
        <Alert
          variant="standard"
          severity={type}
          className={`${styles['container-alert']} ${styles[type || 'error']}`}
          sx={{ borderRadius: '6px' }}
          action={(
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setAlert({ open: false });
              }}
            >
              <SvgIcon className={styles['teste']}>
                <CloseIcon />
              </SvgIcon>
            </IconButton>
              )}
        >
          {message}
        </Alert>
        )}
    </>
  );
}
