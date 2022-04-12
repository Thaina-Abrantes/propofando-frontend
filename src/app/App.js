import CustomAlert from 'components/CustomAlert';
import { Suspense, useState } from 'react';
import { MyRoutes } from './routes';

function App() {
  const [openModal, setOpenModal] = useState(true);
  return (
    <Suspense fallback={null}>
      <MyRoutes />
      <CustomAlert open={openModal} type="error" message="Teste" />
    </Suspense>
  );
}

export default App;
