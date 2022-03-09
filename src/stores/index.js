import { createContext, useContext } from 'react';
import { useCounter } from './counterStore';
import { useUser } from './userStore';

const storesCtx = createContext(null);

export function useStores() {
  return useContext(storesCtx);
}

export function StoresProvider({ children }) {
  const userStore = useUser();
  const counterStore = useCounter();

  return (
    <storesCtx.Provider value={{ userStore, counterStore }}>
      {children}
    </storesCtx.Provider>
  );
}
