import { useEffect, useState } from 'react';
import { useStores } from 'stores';
import style from './styles.module.scss';
import api from '../../services/api';

export default function TableInfo() {
  const {
    userStore: {
      token,
    },
    studentAdminStore: { openUserStatistics, userInfo },

  } = useStores();

  const [statistics, setStatistics] = useState([]);
  const [noData, setNodata] = useState([]);

  useEffect(() => {
    statisticsTableInfo();
  }, []);
  async function statisticsTableInfo() {
    try {
      const response = await api.get(`/categories/statistics/${openUserStatistics.id || userInfo.id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      const { data } = response;
      setNodata(data);
      setStatistics(data);
      return response;
    } catch (error) {
      return error.response;
    }
  }

  return (
    <div className={['table']}>
      <div className={style['table-header']}>
        <div className={style['title-first-column']}>Categoria</div>
        <div className={style['title-second-column']}>Respondidas</div>
        <div className={style['title-third-column']}>Média de acertos</div>
      </div>
      <div className={style['table-body']}>
        {(statistics.length === 1 && !statistics[0].name)
          ? (
            <div className={style['container-no-data']}>
              <p>Ainda não há dados de desempenho disponíveis</p>
            </div>
          )
          : statistics.map((data) => (
            <div key={data.name} className={style['line']}>
              <span className={style['first-column-data']}>{data.name}</span>
              <span className={style['second-column-data']}>
                { data.answeredpercategory}
                /
                {data.numberOfQuestionOfCategory}
              </span>
              <span className={style['third-column-data']}>
                {Number((data.answeredcorretlypercategory) / data.numberOfQuestionOfCategory) * 100}
                {' '}
                %
              </span>
            </div>
          ))}
      </div>
    </div>
  );
}
