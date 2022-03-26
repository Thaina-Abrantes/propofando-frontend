import style from './styles.module.scss';

export default function TableCategories() {
  return (
    <div className={['table']}>
      <div className={style['table-header']}>
        <div className={style['title-colum1']}>Categoria</div>
        <div className={style['title-colum2']}>Respondidas</div>
        <div className={style['title-colum3']}>Média de acertos</div>
      </div>
      <div className={style['table-body']}>
        <div className={style['line']}>
          <span className={style['colum-data1']}>Categoria A</span>
          <span className={style['colum-data2']}>70/100</span>
          <span className={style['colum-data3']}>65%</span>
        </div>
      </div>
    </div>
  );
}
