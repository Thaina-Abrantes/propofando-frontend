import style from './styles.module.scss';

export function StudentPage() {
  return (
    <div className={style['container-page']}>
      <div className={style['container-buttons']}>
        <button className="button">Criar um simulado</button>
        <button className="button">Meus simulados</button>
      </div>
    </div>
  );
}
