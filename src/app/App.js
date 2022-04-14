import CustomAlert from 'components/CustomAlert';
import { Suspense, useState } from 'react';
import { useStores } from 'stores';
import { MyRoutes } from './routes';
import styles from './styles.module.scss';

function App() {
  const { utilsStore: { alert, setAlert } } = useStores();
  const { open, type, message } = alert;

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
