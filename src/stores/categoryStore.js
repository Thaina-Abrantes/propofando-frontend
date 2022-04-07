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
    } catch (error) {
      return error.message;
      // TODO @criar state para controlar as mensagens de erro quem vem do back
    }
  }
  return {
    handleRegisterCategory,
  };
}
