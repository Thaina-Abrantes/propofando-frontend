import { useState } from 'react';
import api from '../services/api';

export function useCategory() {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFkNmVlNjMzLTU5OWItNDY5MC04ZWU5LWRkNjJkNGQyY2FmNiIsImVtYWlsIjoibWFudUBlbWFpbC5jb20iLCJ1c2VyVHlwZSI6InN1cGVyIGFkbWluIiwiaWF0IjoxNjQ5NzY1Nzk5LCJleHAiOjE2NDk4NTIxOTl9.hMyr4s_LjrEWGf9djgcnrn2waWLpDz0HXA_BiOMTHBY';
  const [errorCategory, setErrorCategory] = useState('');
  const [categoryInEditing, setCategoryInEditing] = useState(false);
  // TODO @importar o token correto
  // TODO @criar a função de listar aqui

  async function handleRegisterCategory(category) {
    const body = {
      name: category,
    };

    try {
      const response = await api.post('/categories', body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response;
    } catch (error) {
      const currentError = error.response.data.message || error.response.data;
      setErrorCategory(currentError);
      return error.response;
    }
  }

  async function handleDeleteCategory(id) {
    try {
      await api.delete(`/categories/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      const currentError = error.response.data.message || error.response.data;
      setErrorCategory(currentError);
      return error.response;
    }
  }
  async function handleEditCategory(category) {
    const body = {
      name: category,
    };

    try {
      const response = await api.patch(`/categories/${categoryInEditing.id}`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response;
    } catch (error) {
      const currentError = error.response.data.message || error.response.data;
      setErrorCategory(currentError);
      return error.response;
    }
  }
  return {
    handleRegisterCategory,
    handleDeleteCategory,
    errorCategory,
    setErrorCategory,
    categoryInEditing,
    setCategoryInEditing,
    handleEditCategory,

  };
}
