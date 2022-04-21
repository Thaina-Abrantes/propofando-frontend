import { useState } from 'react';
import api from '../services/api';

export function useQuestion() {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjUzMTNmNTdhLTJiMzQtNDU0Yi04ZTJlLTEyOGQ2NDllNGJkOSIsImVtYWlsIjoibWFudUBlbWFpbC5jb20iLCJ1c2VyVHlwZSI6InN1cGVyIGFkbWluIiwiaWF0IjoxNjUwNDc1MDA3LCJleHAiOjE2NTA1NjE0MDd9.zg76Ntx3eoztp5OkEk4de1QbBK-DatpAxx_r9AtZspQ';
  const [errorQuestion, setErrorQuestion] = useState('');
  const [listQuestions, setListQuestions] = useState([]);
  const [idCategory, setIdCategory] = useState('');
  const [questionInEditing, setQuestionInEditing] = useState(false);

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

  async function handleRegisterQuestion({ form, alternatives, categoryId }) {
    const body = {
      title: form.title,
      description: form.description,
      categoryId,
      image: form.image,
      explanationVideo: form.explanationVideo,
      explanationText: form.explanation,
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
      explanationText: questionInEditing.explanation,
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
  };
}
