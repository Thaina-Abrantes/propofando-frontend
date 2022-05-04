import { useNavigate } from 'react-router-dom';
import { InputDropdown } from 'components/InputDropdown';
import style from './styles.module.scss';
import seta from '../../assets/arrow-back-icon.svg';
import arrow from '../../assets/arrow.svg';
import factCheck from '../../assets/fact-check-icon.svg';

export function MyTests() {
  const navigate = useNavigate();

  const lista = [
    { name: 'Item a', id: 1 },
    { name: 'Item b', id: 2 },
    { name: 'Item c', id: 3 },
  ];

  return (
    <main className={style['container-my-tests']}>
      <div className={style.back}>
        <img src={seta} alt="Seta" />
        <h1>Meus simulados</h1>
      </div>
      <div className={style.border}>
        <div className={style['container-filter']}>
          <span>
            Filtrar por
            <InputDropdown list={lista} />
          </span>
        </div>
      </div>

      <div className={style['table-body']}>
        <div className={style['table-line']}>
          <div className={style['first-item']}>
            <img src={factCheck} alt="listar" />
            <span>05/03/2022</span>
          </div>
          <div className={style['second-item']}>
            <span>Simulado 1</span>
          </div>
          <div className={style['third-item']}>
            <button className="button" onClick={() => navigate('/student/main/consult-questions')}>Consultar respostas</button>
          </div>
        </div>
      </div>
    </main>
  );
}
