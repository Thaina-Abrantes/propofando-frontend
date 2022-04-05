import { useState } from 'react';
import { useStores } from 'stores';
import { NavLink } from 'react-router-dom';
import style from './styles.module.scss';
import UserIcon from '../../assets/identity-icon.svg';
import listIcon from '../../assets/bullet-list-icon.svg';
import arrowUp from '../../assets/arrow-up.svg';
import arrowDown from '../../assets/arrow-down.svg';
import logOut from '../../assets/login-icon.svg';

function AdminPanel() {
  const [showUser, setShowUSer] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);
  const {
    modalStore: {
      openModalRegisterUser,
      setOpenModalRegisterUser,
      openModalNewCategory,
      setOpenModalNewCategory,
    },
  } = useStores();

  return (
    <section className={style.container}>
      <h2>Painel</h2>
      <div>
        <img src={UserIcon} alt="Icone de usuário" />
        <div
          onClick={() => setShowUSer(!showUser)}
          className={style.click}
        >
          <NavLink className={({ isActive }) => (isActive ? style.active : style.inactive)} to="/main">Usuários</NavLink>
          <img
            src={showUser ? arrowUp : arrowDown}
            alt="Flecha para baixo"
          />
        </div>
      </div>
      {showUser && (
        <div className={style.links}>
          <NavLink
            className={({ isActive }) => (isActive ? style.activeLink : style.inactiveLink)}
            to="/main"
            onClick={() => setOpenModalRegisterUser(true)}
          >
            Cadastrar usuário
          </NavLink>
        </div>
      )}

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
          <NavLink
            className={({ isActive }) => (isActive ? style.activeLink : style.inactiveLink)}
            to="/main/question-category"
            onClick={() => setOpenModalNewCategory(true)}
          >
            {' '}
            Criar categoria
          </NavLink>
        </div>
      )}

      <div className={style.logout}>
        <img src={logOut} alt="sair" />
        <NavLink className={({ isActive }) => (isActive ? style.active : style.inactive)} to="/">Sair da conta</NavLink>
      </div>
    </section>
  );
}
export default AdminPanel;
