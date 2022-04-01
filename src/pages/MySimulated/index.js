import StudentHeader from 'components/StudentHeader';
import style from './styles.module.scss';
import seta from '../../assets/arrow-back-icon.svg';
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
          </select>
        </label>
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
