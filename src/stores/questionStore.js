import { useState } from 'react';
import api from '../services/api';
import { useUser } from './userStore';

export function useQuestion() {
  const [errorQuestion, setErrorQuestion] = useState('');
  const [listQuestions, setListQuestions] = useState([]);
  const [idCategory, setIdCategory] = useState('');
  const [questionInEditing, setQuestionInEditing] = useState(false);
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
      await api.delete(`/questions/${id}`, {
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

  async function handleRegisterQuestion({ form, alternatives, categoryId }) {
    const body = {
      title: form.title,
      description: form.description,
      categoryId,
      image: form.image,
      explanationVideo: form.explanationVideo,
      explanationText: form.explanationText,
      alternatives,
    };

    try {
      const response = await api.post('/questions', body, {
        headers: {
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

  async function handleEditQuestion({ alternatives, categoryId }) {
    const body = {
      title: questionInEditing.title,
      description: questionInEditing.description,
      categoryId,
      image: questionInEditing.image,
      explanationVideo: questionInEditing.explanationVideo,
      explanationText: questionInEditing.explanationText,
      alternatives,
    };
    try {
      const response = await api.patch(`/questions/${questionInEditing.id}`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(questionInEditing);
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
    handleRegisterQuestion,
    handleEditQuestion,
    errorQuestion,
    setErrorQuestion,
    listQuestions,
    setListQuestions,
    idCategory,
    setIdCategory,
    questionInEditing,
    setQuestionInEditing,
    currentPage,
    setCurrentPage,
    totalPages,
  };
}
