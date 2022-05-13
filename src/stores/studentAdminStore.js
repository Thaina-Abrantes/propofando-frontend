import { useState } from 'react';
import { useLocalStorage } from 'react-use';
import api from '../services/api';
import { useUser } from './userStore';

export function useStudentAdmin() {
  const [errorUser, setErrorUser] = useState('');
  const [userInEditing, setUserInEditing] = useState(false);
  const { token } = useUser();
  const [dataUsers, setDataUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPage] = useState(1);
  const [searchUser, setSearchUser] = useState('');
  const [openUserStatistics, setOpenUserStatistics] = useState({});
  // const [casheSearch, setCasheSearch, removeCasheSearch] = useLocalStorage({});

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
      const response = await api.delete(`/users/${id}`, {
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
    dataUsers,
    setDataUsers,
    currentPage,
    setCurrentPage,
    totalPages,
    setTotalPage,
    searchUser,
    setSearchUser,
    openUserStatistics,
    setOpenUserStatistics,

  };
}
