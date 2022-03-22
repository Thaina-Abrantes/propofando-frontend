import { useStores } from 'stores';
import style from './styles.module.scss';
import arrowBack from '../../assets/arrow-back-icon.svg';
import searchIcon from '../../assets/search-icon.svg';

function Search() {
  const {
    modalStore: {
      openModalEdit,
      setOpenModalEdit,
    },
  } = useStores();
  return (
    <div className={style.search}>
      <div>
        <img src={arrowBack} alt="Voltar" />
        <h2>Dados de usuários</h2>
      </div>
      <div className={style['search-container']}>
        <img src={searchIcon} alt="Lupa" />
        <input className="input-light" placeholder="Pesquisar usuário" />
        <button
          onClick={() => setOpenModalEdit(true)}
          className="button"
        >
          Cadastrar usuário

        </button>
      </div>
    </div>
  );
}

export default Search;
