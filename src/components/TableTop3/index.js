import style from './styles.module.scss';
import bullet from '../../assets/bullet-list-icon.svg';

export default function TableTop3({ label, top3Categories }) {
  return (
    <div className={['table']}>
      <div className={style['table-header']}>{label}</div>
      <div className={style['table-body']}>
        {!top3Categories
          ? (
            <div className={style['container-no-data']}>
              <p>Ainda não há dados de desempenho disponíveis</p>
            </div>
          )
          : top3Categories.map((category) => (
            <div className={style['line']}>
              <div className={style['container-img']}>
                <img src={bullet} alt="Lista" />
                <span>{category.name}</span>
              </div>
              <span>{category.totalhits || category.totalincorrects}</span>
            </div>
          ))}
      </div>
    </div>
  );
}
