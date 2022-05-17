import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStores } from 'stores';
import analytics from '../../assets/analytics-icon.svg';
import paste from '../../assets/content-paste-icon.svg';
import arrowDown from '../../assets/arrow-down.svg';
import arrowUp from '../../assets/arrow-up.svg';
import logout from '../../assets/logout-icon.svg';
import style from './styles.module.scss';

export default function StudentPanel() {
  const {
    userStore: { handleClearUserData },
  } = useStores();

  const navigate = useNavigate();
  const [showSimulated, setShowSimulated] = useState(false);

  function handleLogout() {
    handleClearUserData();
    navigate('/login');
  }

  return (
    <section className={style.container}>
      <h2>Dashboard</h2>
      <div className={style['performance']}>
        <img src={analytics} alt="Ícone de desempenho" />
        <span onClick={() => navigate('/student/main')}>Desempenho</span>
      </div>
      <div className={style['simulated']}>
        <img src={paste} alt="Pasta" />
        <div
          onClick={() => setShowSimulated(!showSimulated)}
          className={style.click}
        >
          <span>Simulados</span>
          <img
            src={showSimulated ? arrowUp : arrowDown}
            alt="Seta"
          />
        </div>
      </div>
      {showSimulated && (
        <div className={style.links}>
          <a onClick={() => navigate('/student/main/create-test')}>Criar simulado personalizado</a>
          <a onClick={() => navigate('/student/main/my-tests')}>Meus simulados</a>
        </div>
      )}
      <div
        className={style.logout}
        onClick={handleLogout}
      >
        <img src={logout} alt="Sair" />
        <span>Sair da conta</span>
      </div>
    </section>
  );
}
