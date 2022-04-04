import { useStores } from 'stores';
import { useNavigate } from 'react-router-dom';
import style from './styles.module.scss';
import arrowBack from '../../assets/arrow-back-icon.svg';
import searchIcon from '../../assets/search-icon.svg';

function SearchQuestion() {
  const navigate = useNavigate();
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
        <h2>Questões</h2>
      </div>
      <div className={style['search-container']}>
        <img src={searchIcon} alt="Lupa" />
        <input className="input-light" placeholder="Pesquisar questão" />
        <button
          className="button"
          onClick={() => navigate('/main/addquestion')}
        >
          Criar questão

        </button>
      </div>
    </div>
  );
}

export default SearchQuestion;
