import style from './styles.module.scss';

export function StudentPage() {
  return (
    <div className={style['container-page']}>
      <div className={style['container-buttons']}>
        <button className="button">Criar um simulado</button>
        <button className="button">Meus simulados</button>
      </div>
      <h2>Desempenho</h2>
      <div className={style['container-cards']}>
        <div className={style['card']}>
          <h3>Simulados feitos</h3>
          <h1>5</h1>
        </div>
        <div className={style['card']}>
          <h3>Questões respondidas</h3>
          <h1>20%</h1>
        </div>
      </div>
    </div>
  );
}
