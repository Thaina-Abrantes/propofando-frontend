import { useState } from 'react';
import api from '../services/api';
import { useUser } from './userStore';

export function useStudentAdmin() {
  const [errorUser, setErrorUser] = useState('');
  const [userInEditing, setUserInEditing] = useState(false);
  const { token } = useUser();

  async function handleRegisterUser(user) {
    const body = {
      name: user.name,
      email: user.email,
    };

    try {
      const response = await api.post('/users', body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response;
    } catch (error) {
      const currentError = error.response.data.message || error.response.data;
      setErrorUser(currentError);
      return error.response;
    }
  }

  async function handleDeleteUser(id) {
    try {
      await api.delete(`/users/${id}`, {
        header: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      const currentError = error.response.data.message || error.response.data;
      setErrorUser(currentError);
      return error.response;
    }
  }

  async function handleEditUser(user) {
    const body = {
      name: user.name,
      email: user.email,
      password: user.password,
    };

    try {
      const response = await api.patch(`users/${userInEditing.id}`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response;
    } catch (error) {
      const currentError = error.response.data.message || error.response.data;
      setErrorUser(currentError);
      return error.response;
    }
  }
  return {
    handleRegisterUser,
    errorUser,
    setErrorUser,
    handleDeleteUser,
    handleEditUser,
    userInEditing,
    setUserInEditing,
  };
}
