import { useState } from 'react';
import api from '../services/api';
import { useUser } from './userStore';

export function useQuestion() {
  const [errorQuestion, setErrorQuestion] = useState('');
  const [listQuestions, setListQuestions] = useState([]);
  const [idCategory, setIdCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  async function handleListQuestions(token) {
    try {
      const response = await api.get(`/questions?page=${currentPage}&&category=${idCategory}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { data } = response;

      setListQuestions(data.questions);
      setTotalPages(data.totalPages);
    } catch (error) {
      const currentError = error.response.data.message || error.response.data;
      setErrorQuestion(currentError);
      return error.response;
    }
  }

  const { token } = useUser();

  async function handleDeleteQuestion(id) {
    try {
      const response = await api.delete(`/questions/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      return response;
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
    currentPage,
    setCurrentPage,
    totalPages,
  };
}
