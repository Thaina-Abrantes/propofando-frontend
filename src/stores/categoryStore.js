import api from '../services/api';

export function useCategory() {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFkNmVlNjMzLTU5OWItNDY5MC04ZWU5LWRkNjJkNGQyY2FmNiIsImVtYWlsIjoibWFudUBlbWFpbC5jb20iLCJ1c2VyVHlwZSI6InN1cGVyIGFkbWluIiwiaWF0IjoxNjQ5Njc1NjE0LCJleHAiOjE2NDk3NjIwMTR9.Q0MeNBPHEVoh7GywaINivnF3JXH_56LGqhBpnvIn6wE';
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
      const data = await response.json();
      if (!data.ok) {
        throw new Error(data);
      }

      // TODO Chamar a função de listar
    } catch (error) {
      return error.message;
      // TODO @criar state para controlar as mensagens de erro quem vem do back
    }
  }

  async function handleDeleteCategory(id) {
    try {
      await api.delete(`/category/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      // TODO Chamar a função de listar
    } catch (error) {
      return error.message;
    }
  }
  return {
    handleRegisterCategory,
    handleDeleteCategory,
  };
}
