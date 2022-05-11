import { useState } from 'react';
import { useLocalStorage } from 'react-use';
import api from '../services/api';
import { useUser } from './userStore';

export function useSimulated() {
  const [errorListUserSimulated, setErrorListUserSimulated] = useState('');
  const [errorCreateUserSimulated, setErrorCreateUserSimulated] = useState('');
  const [listUserSimulated, setListUserSimulated] = useState([]);
  const [performance, setPerformance] = useState();
  const [top3AnsweredCorrectly, setTop3AnsweredCorrectly] = useState([]);
  const [top3AnsweredIncorrectly, setTop3AnsweredIncorrectly] = useState([]);
  const [idSimulated, setIdSimulated] = useState('');
  const [consultingSimulated, setConsultingSimulated] = useLocalStorage('consulting-simulated');
  const [page, setPage] = useState(0);
  const [dataAnswers, setDataAnswers] = useState([]);

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
      quantityQuestions: Number(form.quantity),
      name: form.name,
    };

    try {
      const response = await api.post('/simulated', body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { data } = response;
      setIdSimulated(data);
      return response;
    } catch (error) {
      const currentError = error.response.data.message || error.response.data;
      setErrorCreateUserSimulated(currentError);
      return error.response;
    }
  }

  async function handlePerformance(userId) {
    try {
      const response = await api.get(`/users/${userId}/performance`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { data } = response;
      setPerformance(data);
      return data;
    } catch (error) {
      return error.response;
    }
  }

  async function handleConsultAnswers(simulatedId) {
    try {
      const response = await api.get(`/simulated/${simulatedId}/answers`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { data } = response;
      return data;
    } catch (error) {
      const currentError = error.response.data.message || error.response.data;
      setErrorListUserSimulated(currentError);
    }
  }
  async function handleTop3CategoriesHits(userId) {
    try {
      const response = await api.get(`/users/${userId}/top-3-hits`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { data } = response;
      setTop3AnsweredCorrectly(data);
      return data;
    } catch (error) {
      return error.response;
    }
  }

  async function handleTop3CategoriesErrors(userId) {
    try {
      const response = await api.get(`/users/${userId}/top-3-errors`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { data } = response;
      setTop3AnsweredIncorrectly(data);
      return data;
    } catch (error) {
      return error.response;
    }
  }

  return {
    handleListUserSimulated,
    handleCreateUserSimulated,
    handleConsultAnswers,
    errorListUserSimulated,
    setErrorListUserSimulated,
    listUserSimulated,
    setListUserSimulated,
    setErrorCreateUserSimulated,
    errorCreateUserSimulated,
    handlePerformance,
    performance,
    setPerformance,
    handleTop3CategoriesHits,
    top3AnsweredCorrectly,
    setTop3AnsweredCorrectly,
    handleTop3CategoriesErrors,
    top3AnsweredIncorrectly,
    setTop3AnsweredIncorrectly,
    idSimulated,
    setIdSimulated,
    consultingSimulated,
    setConsultingSimulated,
    page,
    setPage,
    dataAnswers,
    setDataAnswers,
  };
}
