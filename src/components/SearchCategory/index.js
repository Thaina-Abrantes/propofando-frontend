import { useStores } from 'stores';
import style from './styles.module.scss';
import arrowBack from '../../assets/arrow-back-icon.svg';
import searchIcon from '../../assets/search-icon.svg';

function SearchCategory({ setSearchItem }) {
  const {
    modalStore: {
      openModalNewCategory,
      setOpenModalNewCategory,
    },
    categoryStore: {
      setErrorCategory,
    },
  } = useStores();

  function handleChange(e) {
    setSearchItem(e.target.value);
  }

  function handleOpenModal() {
    setErrorCategory('');
    setOpenModalNewCategory(true);
  }
  return (
    <div className={style.search}>
      <div>
        <img src={arrowBack} alt="Voltar" />
        <h2>Categorias e questões</h2>
      </div>
      <div className={style['search-container']}>
        <img src={searchIcon} alt="Lupa" />
        <input
          className="input-light"
          placeholder="Pesquisar"
          onChange={handleChange}
        />
        <button
          onClick={handleOpenModal}
          className="button"
        >
          Criar categoria
        </button>
      </div>
    </div>
  );
}

export default SearchCategory;
