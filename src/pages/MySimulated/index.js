import StudentHeader from 'components/StudentHeader';
import style from './styles.module.scss';
import seta from '../../assets/arrow-back-icon.svg';

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
    </main>
  );
}
