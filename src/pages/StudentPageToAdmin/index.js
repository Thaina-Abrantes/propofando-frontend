import TableTopPerformance from 'components/TableTopPerformance';
import TableInfo from 'components/TableInfo';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useStores } from 'stores';
import style from './styles.module.scss';

export function StudentPageToAdmin() {
  const navigate = useNavigate();

  const {
    simulatedStore: {
      handlePerformance,
      handleTop3CategoriesHits,
      handleTop3CategoriesErrors,
      performance,
      top3AnsweredCorrectly,
      top3AnsweredIncorrectly,
    },
    userStore: {
      token,
    },
    studentAdminStore: { openUserStatistics, userInfo },
  } = useStores();
  useEffect(async () => {
    await handlePerformance(openUserStatistics.id || userInfo.id, token);
    await handleTop3CategoriesHits(openUserStatistics.id || userInfo.id, token);
    await handleTop3CategoriesErrors(openUserStatistics.id || userInfo.id, token);
  }, []);
  return (
    <div className={style['container-page']}>
      <div className={style['container-name']}>
        <h2>
          {openUserStatistics.name || userInfo.name}
          {' '}
        </h2>
        <h3>Desempenho</h3>
      </div>
      <div className={style['container-cards']}>
        <div className={style['card']}>
          <h3>Simulados feitos</h3>
          <h1>{!performance ? 0 : performance.totalSimulateds}</h1>
        </div>
        <div className={style['card']}>
          <h3>Questões respondidas</h3>
          <h1>{!performance ? 0 : performance.percentageAnswered}</h1>
        </div>
      </div>
      <div className={style['container-tabletop-perfomance']}>
        <TableTopPerformance
          label="Categorias que mais acertou"
          top3Categories={top3AnsweredCorrectly}
        />
        <TableTopPerformance
          label="Categorias que mais errou"
          top3Categories={top3AnsweredIncorrectly}
        />
      </div>
      <TableInfo />
    </div>
  );
}
