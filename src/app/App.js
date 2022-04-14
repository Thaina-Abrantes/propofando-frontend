import CustomAlert from 'components/CustomAlert';
import { Suspense, useState } from 'react';
import { useStores } from 'stores';
import { MyRoutes } from './routes';

function App() {
  const { utilsStore: { alert, setAlert } } = useStores();
  const { open, type, message } = alert;

  return (
    <Suspense fallback={null}>
      <CustomAlert open={open} type={type} message={message} />
      <MyRoutes />
    </Suspense>
  );
}

export default App;
