import { useState } from 'react';
import style from './styles.module.scss';

export default function TableInfoCategories() {
  const [noData, setNoData] = useState(true);

  const performanceData = [
    { category: 'A', answered: '70/100', average: '65%' },
    { category: 'B', answered: '35/100', average: '35%' },
    { category: 'C', answered: '80/100', average: '80%' },
    { category: 'D', answered: '62/100', average: '62%' },
    { category: 'E', answered: '94/100', average: '94%' },
    { category: 'F', answered: '55/100', average: '55%' },
  ];
  return (
    <div className={['table']}>
      <div className={style['table-header']}>
        <div className={style['title-colum1']}>Categoria</div>
        <div className={style['title-colum2']}>Respondidas</div>
        <div className={style['title-colum3']}>Média de acertos</div>
      </div>
      <div className={style['table-body']}>
        {noData
          ? (
            <div className={style['container-no-data']}>
              <p>Ainda não há dados de desempenho disponíveis</p>
            </div>
          )
          : performanceData.map((data) => (
            <div className={style['line']}>
              <span className={style['colum-data1']}>{data.category}</span>
              <span className={style['colum-data2']}>{data.answered}</span>
              <span className={style['colum-data3']}>{data.average}</span>
            </div>
          ))}
      </div>
    </div>
  );
}
