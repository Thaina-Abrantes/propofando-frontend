import { Backdrop, CircularProgress } from '@mui/material';
import CustomAlert from 'components/CustomAlert';
import { Suspense, useEffect } from 'react';
import { useStores } from 'stores';
import { MyRoutes } from './routes';
import styles from './styles.module.scss';

function App() {
  const {
    utilsStore: { alert, setAlert },
    loadingStore: { openLoading },
  } = useStores();

  const { open, type, message } = alert;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert({ open: false });
    }, 3000);

    return () => clearTimeout(timeout);
  }, [open]);

  return (
    <Suspense fallback={null}>
      <div className={styles['container-app']}>
        <Backdrop
          sx={{ color: 'var(--pink200)', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={openLoading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        <CustomAlert open={open} type={type} message={message} />
        <MyRoutes />
      </div>
    </Suspense>
  );
}

export default App;
