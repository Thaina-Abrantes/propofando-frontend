import { useStores } from 'stores';
import { useState } from 'react';
import style from './styles.module.scss';
import clear from '../../assets/clear-icon.svg';

function ModalNewCategory() {
  const [category, setCategory] = useState('');

  const {
    modalStore: {
      openModalNewCategory,
      setOpenModalNewCategory,
    },
  } = useStores();

  function handleSubmit(e) {
    e.preventDefault();
  }
  async function handleRegisterCategory() {
    const body = {
      name: category,
    };
    if (!category);

    try {
      fetch('https://localhost:3333/category', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Authorization: `Bearer ${auth.token}`,
        },
        body: JSON.stringify(body),
      });
    } catch (error) {
      return error.message;
    }
  }

  return (
    <div className={style.background}>
      <div className={style.container}>
        <div className={style['btn-close']}>
          <button
            onClick={() => setOpenModalNewCategory(false)}
          >
            <img src={clear} alt="Close" />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <h2>Nova categoria</h2>

          <label>
            Título
          </label>
          <input
            className="input-light"
            placeholder="Categoria"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />

          <button
            onClick={() => handleRegisterCategory()}
            className="button"
          >
            Adicionar categoria

          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalNewCategory;
