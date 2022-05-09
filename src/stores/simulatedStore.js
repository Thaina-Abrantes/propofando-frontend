import { useState } from 'react';
import api from '../services/api';
import { useUser } from './userStore';

export function useSimulated() {
  const [errorListUserSimulated, setErrorListUserSimulated] = useState('');
  const [errorCreateUserSimulated, setErrorCreateUserSimulated] = useState('');
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

  async function handleCreateUserSimulated(form, id) {
    const body = {
      userId: id,
      quantityQuestions: form.quantity,
      name: form.name,
    };

    try {
      const response = await api.post('/simulated', body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { data } = response;
      return data;
    } catch (error) {
      const currentError = error.response.data.message || error.response.data;
      setErrorCreateUserSimulated(currentError);
      return error.response;
    }
  }

  return {
    handleListUserSimulated,
    handleCreateUserSimulated,
    errorListUserSimulated,
    setErrorListUserSimulated,
    listUserSimulated,
    setListUserSimulated,
    setErrorCreateUserSimulated,
    errorCreateUserSimulated,
  };
}
