import { useEffect, useState } from 'react';
import api from '../services/api';
import { useUser } from './userStore';
import { useUtils } from './utilsStore';

export function useLoading() {
  const [openLoading, setOpenLoading] = useState(false);

  const { alert, setAlert } = useUtils();
  const { handleClearUserData } = useUser();

  useEffect(() => {
    api.interceptors.request.use(
      (config) => {
        if (config) {
          setOpenLoading(true);
        }
        return config;
      },
      (error) => {
        setAlert({ open: true, type: 'error', message: error.response });
        setOpenLoading(false);
        return error.response;
      },

    );

    api.interceptors.response.use(
      (response) => {
        setOpenLoading(false);
        return response;
      },
      (error) => {
        setOpenLoading(false);
        if (error.response.data === 'Erro de autenticação!') {
          handleClearUserData();
          window.location.reload();
          return;
        }

        return error.response || error;
      },

    );
  }, []);

  return {
    openLoading,
    setOpenLoading,
  };
}
