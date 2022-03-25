import { useStores } from 'stores';
import style from './styles.module.scss';
import arrowBack from '../../assets/arrow-back-icon.svg';
import searchIcon from '../../assets/search-icon.svg';

function SearchQuestion() {
  const {
    modalStore: {
      openModalNewCategory,
      setOpenModalNewCategory,
    },
  } = useStores();
  return (
    <div className={style.search}>
      <div>
        <img src={arrowBack} alt="Voltar" />
        <h2>Categorias e questões</h2>
      </div>
      <div className={style['search-container']}>
        <img src={searchIcon} alt="Lupa" />
        <input className="input-light" placeholder="Pesquisar" />
        <button
          onClick={() => setOpenModalNewCategory(true)}
          className="button"
        >
          Criar categoria

        </button>
      </div>
    </div>
  );
}

export default SearchQuestion;
