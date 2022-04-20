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
      setQuestionInEditing,
    },
  } = useStores();

  function handleChange(e) {
    setSearchQuestion(e.target.value);
  }

  function handleClick() {
    navigate('/main/add-question');
    setQuestionInEditing(false);
  }

  return (
    <div className={style.search}>
      <div>
        <img src={arrowBack} alt="Voltar" />
        <h2>Questões</h2>
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
          onClick={() => handleClick()}
        >
          Criar questão

        </button>
      </div>
    </div>
  );
}

export default SearchQuestion;
