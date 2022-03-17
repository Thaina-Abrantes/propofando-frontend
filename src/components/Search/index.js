import style from './styles.module.scss';
import arrowBack from '../../assets/arrow-back-icon.svg';

function Search() {
  return (
    <div className={style.search}>
      <div>
        <img src={arrowBack} alt="Voltar" />
        <h2>Dados de usuários</h2>
      </div>
      <div>
        <input className="input-light" placeholder="Pesquisar usuário" />
        <button className="button">Cadastrar usuário</button>
      </div>
    </div>
  );
}

export default Search;
