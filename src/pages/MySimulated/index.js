import StudentHeader from 'components/StudentHeader';
import style from './styles.module.scss';
import seta from '../../assets/arrow-back-icon.svg';
import arrow from '../../assets/arrow.svg';
import factCheck from '../../assets/fact-check-icon.svg';

export function MySimulated() {
  return (
    <main className={style['container-main']}>
      <StudentHeader />
      <div className={style.back}>
        <img src={seta} alt="Seta" />
        <h1>Meus simulados</h1>
      </div>
      <div className={style['container-filter']}>
        <label>
          Filtrar por
          <select>
            <option value="0">Todos</option>
            <option value="1">Simulado 1</option>
            <option value="2">Simulado 2</option>
          </select>
        </label>
        <img src={arrow} alt="seta" />
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
            <button className="button">Consultar respostas</button>
          </div>
        </div>
      </div>
    </main>
  );
}
