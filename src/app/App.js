import CustomAlert from 'components/CustomAlert';
import { Suspense, useEffect } from 'react';
import { useStores } from 'stores';
import { MyRoutes } from './routes';
import styles from './styles.module.scss';

function App() {
  const { utilsStore: { alert, setAlert } } = useStores();
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
        <CustomAlert open={open} type={type} message={message} />
        <MyRoutes />
      </div>
    </Suspense>
  );
}

export default App;
