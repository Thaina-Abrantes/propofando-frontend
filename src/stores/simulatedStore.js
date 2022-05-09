import { useState } from 'react';
import { useLocalStorage } from 'react-use';
import api from '../services/api';
import { useUser } from './userStore';

export function useSimulated() {
  const [errorListUserSimulated, setErrorListUserSimulated] = useState('');
  const [listUserSimulated, setListUserSimulated] = useState([]);

  const { token } = useUser();
  async function handleListUserSimulated(userId) {
    try {
      const response = await api.get(`/simulated/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { data } = response;
      return data;
    } catch (error) {
      const currentError = error.response.data.message || error.response.data;
      setErrorListUserSimulated(currentError);
      return error.response;
    }
  }

  return {
    handleListUserSimulated,
    errorListUserSimulated,
    setErrorListUserSimulated,
    listUserSimulated,
    setListUserSimulated,
  };
}
