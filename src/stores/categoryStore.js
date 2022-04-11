import { useState } from 'react';
import api from '../services/api';

export function useCategory() {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFkNmVlNjMzLTU5OWItNDY5MC04ZWU5LWRkNjJkNGQyY2FmNiIsImVtYWlsIjoibWFudUBlbWFpbC5jb20iLCJ1c2VyVHlwZSI6InN1cGVyIGFkbWluIiwiaWF0IjoxNjQ5Njc1NjE0LCJleHAiOjE2NDk3NjIwMTR9.Q0MeNBPHEVoh7GywaINivnF3JXH_56LGqhBpnvIn6wE';
  const [errorCategory, setErrorCategory] = useState('');
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
      const { data } = response;

      return data;
    } catch (error) {
      if (error.response.data.message) {
        return setErrorCategory(error.response.data.message);
      }
      return setErrorCategory(error.response.data);
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
      setErrorCategory(error.response.data);
    }
  }

  return {
    handleRegisterCategory,
    handleDeleteCategory,
    errorCategory,
    setErrorCategory,
  };
}
