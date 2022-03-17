import { useState } from 'react';
import style from './styles.module.scss';
import UserIcon from '../../assets/identity-icon.svg';
import listIcon from '../../assets/bullet-list-icon.svg';
import arrowUp from '../../assets/arrow-up.svg';
import arrowDown from '../../assets/arrow-down.svg';
import logOut from '../../assets/login-icon.svg';

function AdminPanel() {
  const [showUser, setShowUSer] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);

  return (
    <section className={style.container}>
      <h2>Painel</h2>
      <div>
        <img src={UserIcon} alt="Icone de usuário" />
        <div
          onClick={() => setShowUSer(!showUser)}
          className={style.click}
        >
          <span>Usuários</span>
          <img
            src={showUser ? arrowUp : arrowDown}
            alt="Flecha para baixo"
          />
        </div>
      </div>
      {showUser && (
        <div className={style.links}>
          <a>Cadastrar usuário</a>
        </div>
      )}

      <div>
        <img src={listIcon} alt="Icone de usuário" />
        <div
          onClick={() => setShowQuestion(!showQuestion)}
          className={style.click}
        >
          <span>Categorias e questões</span>
          <img
            src={showQuestion ? arrowUp : arrowDown}
            alt="Flecha para baixo"
          />
        </div>
      </div>
      {showQuestion && (
        <div className={style.links}>
          <a> Criar questão</a>
          <a> Criar categoria</a>
        </div>
      )}

      <div className={style.logout}>
        <img src={logOut} alt="sair" />
        <span>Sair da conta</span>
      </div>
    </section>
  );
}
export default AdminPanel;
