import { Suspense } from 'react';
import { MyRoutes } from './routes';

function App() {
  return (
    <Suspense fallback={null}>
      <MyRoutes />
    </Suspense>
  );
}

export default App;
