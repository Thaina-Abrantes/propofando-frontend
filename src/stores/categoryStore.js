export function useCategory() {
  const token = '123456'; // TODO @importar o token correto

  async function handleRegisterCategory(category) {
    const body = {
      name: category,
    };

    if (!category); // TODO @Inserir toast de alerta com mensagem de categoria obrigatoria

    try {
      const response = await fetch('https://localhost:3333/category', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
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
      await fetch(`https://localhost:3333/category/${id}`, {
        method: 'DELETE',
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
