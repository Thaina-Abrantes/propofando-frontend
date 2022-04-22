import { useStores } from 'stores';
import { useNavigate } from 'react-router-dom';
import style from './styles.module.scss';
import arrowBack from '../../assets/arrow-back-icon.svg';
import searchIcon from '../../assets/search-icon.svg';

function SearchQuestion({ setSearchQuestion }) {
  const navigate = useNavigate();

  const {
    modalStore: {
      openModalNewCategory,
      setOpenModalNewCategory,
    },
    questionStore: {
      categoryName,
    },
  } = useStores();

  function handleChange(e) {
    setSearchQuestion(e.target.value);
  }

  return (
    <div className={style.search}>
      <div className={style.title}>
        <div>
          <img src={arrowBack} alt="Voltar" />
          <h2>Questões</h2>
        </div>
        <span>
          {categoryName}
          {' '}
          / Questões
        </span>
      </div>
      <div className={style['search-container']}>
        <img src={searchIcon} alt="Lupa" />
        <input
          className="input-light"
          placeholder="Pesquisar questão"
          onChange={handleChange}
        />
        <button
          className="button"
          onClick={() => navigate('/main/add-question')}
        >
          Criar questão

        </button>
      </div>
    </div>
  );
}

export default SearchQuestion;
