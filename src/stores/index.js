import { createContext, useContext } from 'react';
import { useCategory } from './categoryStore';
import { useCounter } from './counterStore';
import { useModal } from './modalStore';
import { useLoading } from './useLoading';
import { useUser } from './userStore';
import { useUtils } from './utilsStore';
import { useStudentAdmin } from './studentAdminStore';
import { useQuestion } from './questionStore';
import { useSimulated } from './simulatedStore';

const storesCtx = createContext(null);

export function useStores() {
  return useContext(storesCtx);
}

export function StoresProvider({ children }) {
  const userStore = useUser();
  const counterStore = useCounter();
  const modalStore = useModal();
  const categoryStore = useCategory();
  const utilsStore = useUtils();
  const questionStore = useQuestion();
  const loadingStore = useLoading();
  const simulatedStore = useSimulated();

  const studentAdminStore = useStudentAdmin();

  return (
    <storesCtx.Provider value={{
      userStore,
      counterStore,
      modalStore,
      utilsStore,
      studentAdminStore,
      categoryStore,
      questionStore,
      loadingStore,
      simulatedStore,
    }}
    >
      {children}
    </storesCtx.Provider>
  );
}
