import { useStores } from 'stores';
import style from './styles.module.scss';
import searchIcon from '../../assets/search-icon.svg';

function Search() {
  const {
    modalStore: {
      openModalEdit,
      setOpenModalEdit,
      openModalRegisterUser,
      setOpenModalRegisterUser,
    },
    studentAdminStore: {
      setErrorUser,
      setSearchUser,
    },
  } = useStores();

  function handleChange(e) {
    setSearchUser(e.target.value);
  }

  function handleOpenModalRegister() {
    setErrorUser('');
    setOpenModalRegisterUser(true);
  }
  return (
    <div className={style.search}>
      <div>
        <h2>Dados de usuários</h2>
      </div>
      <div className={style['search-container']}>
        <img src={searchIcon} alt="Lupa" />
        <input
          className="input-light"
          placeholder="Pesquisar usuário"
          onChange={(e) => handleChange(e)}
        />
        <button
          onClick={handleOpenModalRegister}
          className="button"
        >
          Cadastrar usuário

        </button>
      </div>
    </div>
  );
}

export default Search;
