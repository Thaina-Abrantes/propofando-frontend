import style from './styles.module.scss';
import bullet from '../../assets/bullet-list-icon.svg';

export default function TableTop3({
  label, category1, category2, category3, amount1, amount2, amount3,
}) {
  return (
    <div className={['table']}>
      <div className={style['table-header']}>{label}</div>
      <div className={style['table-body']}>
        <div className={style['line']}>
          <div className={style['container-img']}>
            <img src={bullet} alt="Lista" />
            <span>{category1}</span>
          </div>
          <span>{amount1}</span>
        </div>
        <div className={style['line']}>
          <div className={style['container-img']}>
            <img src={bullet} alt="Lista" />
            <span>{category2}</span>
          </div>
          <span>{amount2}</span>
        </div>
        <div className={style['line3']}>
          <div className={style['container-img']}>
            <img src={bullet} alt="Lista" />
            <span>{category3}</span>
          </div>
          <span>{amount3}</span>
        </div>
      </div>
    </div>
  );
}
