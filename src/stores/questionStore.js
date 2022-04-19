import { useState } from 'react';
import api from '../services/api';

export function useQuestion() {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjUzMTNmNTdhLTJiMzQtNDU0Yi04ZTJlLTEyOGQ2NDllNGJkOSIsImVtYWlsIjoibWFudUBlbWFpbC5jb20iLCJ1c2VyVHlwZSI6InN1cGVyIGFkbWluIiwiaWF0IjoxNjUwMzg4MDMwLCJleHAiOjE2NTA0NzQ0MzB9.r6UNhQLgZLTaPTOT7ztERqcTISUKxpPswxaXpMCiheo';

  const [errorQuestion, setErrorQuestion] = useState('');
  const [listQuestions, setListQuestions] = useState([]);
  const [idCategory, setIdCategory] = useState('');

  async function handleListQuestions() {
    try {
      const response = await api.get('/questions', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { data } = response;

      const questionsSelected = data.questions
        .filter((question) => question.categoryId === idCategory);
      setListQuestions(questionsSelected);
    } catch (error) {
      const currentError = error.response.data.message || error.response.data;
      setErrorQuestion(currentError);
      return error.response;
    }
  }

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

  async function handleRegisterQuestion({ form, alternatives }) {
    const body = {
      title: form.title,
      description: form.description,
      categoryId: form.categoryId,
      image: form.image,
      explanationVideo: form.explanationVideo,
      explanationText: form.explanation,
      alternatives,
    };
    console.log(body);
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

  return {
    handleListQuestions,
    handleDeleteQuestion,
    handleRegisterQuestion,
    errorQuestion,
    setErrorQuestion,
    listQuestions,
    setListQuestions,
    idCategory,
    setIdCategory,
  };
}
