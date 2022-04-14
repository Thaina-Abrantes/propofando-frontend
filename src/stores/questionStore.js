import { useState } from 'react';
import api from '../services/api';

export function useQuestion() {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjUzMTNmNTdhLTJiMzQtNDU0Yi04ZTJlLTEyOGQ2NDllNGJkOSIsImVtYWlsIjoibWFudUBlbWFpbC5jb20iLCJ1c2VyVHlwZSI6InN1cGVyIGFkbWluIiwiaWF0IjoxNjQ5OTM4NDgyLCJleHAiOjE2NTAwMjQ4ODJ9.u1xnXv7jnezzXa1EuIztgdZXE5SB9j4By4mNraJ3lFY';

  const [errorQuestion, setErrorQuestion] = useState('');

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

  return {
    handleDeleteQuestion,
    errorQuestion,
    setErrorQuestion,
  };
}
