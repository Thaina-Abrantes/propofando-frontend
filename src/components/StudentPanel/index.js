import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import analytics from '../../assets/analytics-icon.svg';
import paste from '../../assets/content-paste-icon.svg';
import arrowDown from '../../assets/arrow-down.svg';
import arrowUp from '../../assets/arrow-up.svg';
import logout from '../../assets/logout-icon.svg';
import style from './styles.module.scss';

export default function StudentPanel() {
  const navigate = useNavigate();
  const [showSimulated, setShowSimulated] = useState(false);

  return (
    <section className={style.container}>
      <h2>Dashboard</h2>
      <div className={style['performance']}>
        <img src={analytics} alt="Ícone de desempenho" />
        <span>Desempenho</span>
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
          <a onClick={() => navigate('/create-test')}>Criar simulado personalizado</a>
          <a onClick={() => navigate('/my-tests')}>Meus simulados</a>
        </div>
      )}
      <div
        className={style.logout}
        onClick={() => navigate('/login')}
      >
        <img src={logout} alt="Sair" />
        <span>Sair da conta</span>
      </div>
    </section>
  );
}
