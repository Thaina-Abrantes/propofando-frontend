import { useState } from 'react';
import api from '../services/api';
import { useUser } from './userStore';

export function useQuestion() {
  const { token } = useUser();

  const [errorQuestion, setErrorQuestion] = useState('');
  const [listQuestions, setListQuestions] = useState([]);
  const [idCategory, setIdCategory] = useState('');

  async function handleListQuestions() {
    try {
      const response = await api.get(`/questions?category=${idCategory}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { data } = response;

      setListQuestions(data.questions);
    } catch (error) {
      const currentError = error.response.data.message || error.response.data;
      setErrorQuestion(currentError);
      return error.response;
    }
  }

  async function handleDeleteQuestion(id) {
    try {
      const result = await api.delete(`/questions/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      const currentError = error.response.data.message || error.response.data;
      setErrorQuestion(currentError);
      return error.response;
    }
  }

  return {
    handleListQuestions,
    handleDeleteQuestion,
    errorQuestion,
    setErrorQuestion,
    listQuestions,
    setListQuestions,
    idCategory,
    setIdCategory,
  };
}
