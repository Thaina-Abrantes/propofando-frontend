import TableTop3 from 'components/TableTop3';
import TableInfoCategories from 'components/TableInfoCategories';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useStores } from 'stores';
import style from './styles.module.scss';
import lamp from '../../assets/lamp-icon.svg';

export function StudentPage() {
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
      userData,
    },
  } = useStores();

  useEffect(async () => {
    await handlePerformance(userData.id);
    await handleTop3CategoriesHits(userData.id);
    await handleTop3CategoriesErrors(userData.id);
    console.log(top3AnsweredCorrectly, 'categ');
  }, []);

  return (
    <div className={style['container-page']}>
      <div className={style['container-buttons']}>
        <button className="button" onClick={() => navigate('/student/main/create-test')}>Criar um simulado</button>
        <button className="button" onClick={() => navigate('/student/main/my-tests')}>Meus simulados</button>
      </div>
      <h2>Desempenho</h2>
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
      <div className={style['container-tabletop3']}>
        <TableTop3
          label="Categorias que mais acertou"
          top3Categories={top3AnsweredCorrectly}
        />
        <TableTop3
          label="Categorias que mais errou"
          top3Categories={top3AnsweredIncorrectly}
        />
      </div>
      {performance
         && (
         <div className={style['info']}>
           <img src={lamp} alt="Lampada" />
           <p>
             Você sabia? Com base nos resultados dos simulados,
             sua média de acertos geral é de
             {' '}
             {performance.percentageHits}
             .
           </p>
         </div>
         )}
      <TableInfoCategories />
    </div>
  );
}
