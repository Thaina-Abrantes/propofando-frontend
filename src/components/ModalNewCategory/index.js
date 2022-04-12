import { useStores } from 'stores';
import { useEffect, useState } from 'react';
import style from './styles.module.scss';
import clear from '../../assets/clear-icon.svg';

function ModalNewCategory() {
  const [category, setCategory] = useState('');

  const {
    modalStore: {
      openModalNewCategory,
      setOpenModalNewCategory,
    },
    categoryStore: {
      handleRegisterCategory,
      errorCategory,
      setErrorCategory,
    },
  } = useStores();

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await handleRegisterCategory(category);
    if (response.status > 204) {
      return;
    }

    setOpenModalNewCategory(false);
  }

  function handleCloseModal() {
    setErrorCategory('');
    setOpenModalNewCategory(false);
  }
  function handleChange(e) {
    setCategory(e.target.value);
    setErrorCategory('');
  }

  return (
    <div className={style.background}>
      <div className={style.container}>
        <div className={style['btn-close']}>
          <button
            onClick={handleCloseModal}
          >
            <img src={clear} alt="Close" />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <h2>Nova categoria</h2>

          <label>
            Título
          </label>
          <div className="containerInput">
            <input
              className="input-light"
              placeholder="Categoria"
              name="category"
              value={category}
              onChange={handleChange}
            />
            {errorCategory && <span className={style['span-error']}>{errorCategory}</span> }
          </div>

          <button
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
