import { createContext, useContext } from 'react';
import { useCategory } from './categoryStore';
import { useCounter } from './counterStore';
import { useModal } from './modalStore';
import { useUser } from './userStore';

const storesCtx = createContext(null);

export function useStores() {
  return useContext(storesCtx);
}

export function StoresProvider({ children }) {
  const userStore = useUser();
  const counterStore = useCounter();
  const modalStore = useModal();
  const categoryStore = useCategory();

  return (
    <storesCtx.Provider value={{
      userStore, counterStore, modalStore, categoryStore,
    }}
    >
      {children}
    </storesCtx.Provider>
  );
}
