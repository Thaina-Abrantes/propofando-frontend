import { useEffect, useState } from 'react';
import { useStores } from 'stores';
import style from './styles.module.scss';
import api from '../../services/api';

export default function TableInfoCategories() {
  const {
    userStore: {
      userData,
      token,
    },

  } = useStores();

  const [statistics, setStatistics] = useState([]);
  const [noData, setNoData] = useState([]);
  useEffect(() => {
    statisticsTableInfoCategory();
  }, []);
  async function statisticsTableInfoCategory() {
    try {
      const response = await api.get(`/categories/statistics/${userData.id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      const { data } = response;
      setNoData(data);
      setStatistics(data);
      return response;
    } catch (error) {
      return error.response;
    }
  }
  return (
    <div className={['table']}>
      <div className={style['table-header']}>
        <div className={style['title-colum1']}>Categoria</div>
        <div className={style['title-colum2']}>Respondidas</div>
        <div className={style['title-colum3']}>Média de acertos</div>
      </div>
      <div className={style['table-body']}>
        {(noData.length === 1 && !noData[0].name)
          ? (
            <div className={style['container-no-data']}>
              <p>Ainda não há dados de desempenho disponíveis</p>
            </div>
          )
          : statistics.map((data) => (
            <div key={data.name} className={style['line']}>
              <span className={style['colum-data1']}>{data.name}</span>
              <span className={style['colum-data2']}>
                { data.answeredpercategory}
                /
                {data.numberOfQuestionOfCategory}
              </span>
              <span className={style['colum-data3']}>
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
