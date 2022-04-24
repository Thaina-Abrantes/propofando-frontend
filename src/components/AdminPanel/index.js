import { useState } from 'react';
import { useStores } from 'stores';
import { NavLink, useNavigate } from 'react-router-dom';
import style from './styles.module.scss';
import UserIcon from '../../assets/identity-icon.svg';
import listIcon from '../../assets/bullet-list-icon.svg';
import arrowUp from '../../assets/arrow-up.svg';
import arrowDown from '../../assets/arrow-down.svg';
import logOut from '../../assets/login-icon.svg';

function AdminPanel() {
  const { userStore: { handleClearUserData } } = useStores();

  const [showQuestion, setShowQuestion] = useState(false);

  const navigate = useNavigate();

  function handleLogout() {
    handleClearUserData();
    navigate('/login');
  }

  return (
    <section className={style.container}>
      <h2>Painel</h2>
      <div>
        <img src={UserIcon} alt="Icone de usuário" />
        <div className={style.click}>
          <NavLink className={({ isActive }) => (isActive ? style.active : style.inactive)} to="/main">Usuários</NavLink>
        </div>
      </div>

      <div>
        <img src={listIcon} alt="Icone de usuário" />
        <div
          onClick={() => setShowQuestion(!showQuestion)}
          className={style.click}
        >
          <NavLink className={({ isActive }) => (isActive ? style.active : style.inactive)} to="/main/question-category">Categorias e questões</NavLink>
          <img
            src={showQuestion ? arrowUp : arrowDown}
            alt="Flecha para baixo"
          />
        </div>
      </div>
      {showQuestion && (
        <div className={style.links}>
          <NavLink
            to="/main/add-question"
            className={({ isActive }) => (isActive ? style.activeLink : style.inactiveLink)}
          >
            {' '}
            Criar questão

          </NavLink>
        </div>
      )}

      <div
        className={style.logout}
        onClick={handleLogout}
      >
        <img src={logOut} alt="sair" />
        <span>Sair da conta</span>
      </div>
    </section>
  );
}
export default AdminPanel;
