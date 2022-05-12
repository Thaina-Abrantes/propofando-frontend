import { useEffect, useState } from 'react';
import { useStores } from 'stores';
import close from '../../assets/clear-icon.svg';
import style from './styles.module.scss';

export default function QuestionStatistics() {
  const {
    utilsStore: { setOpenQuestionStatistics },
    simulatedStore: { dataAnswers, page },
    questionStore: {
      handleQuestionStatistic,
      statistic,
      setStatistic,
    },
  } = useStores();

  useEffect(async () => {
    const data = await handleQuestionStatistic(dataAnswers[page].id);
    setStatistic(data);
  }, []);

  useEffect(() => {
    console.log(dataAnswers, 'data', page, 'page');
    console.log(statistic, 'statistic');
  }, []);

  return (
    <div className={style['container-statistics']}>
      <div className={style.imgClose} onClick={() => setOpenQuestionStatistics(false)}>
        <img className={style.close} src={close} alt="Fechar" />
      </div>

      <h2>Estatísticas da questão</h2>

      <div className={style.cards}>
        <div className={style.card}>
          <div className={style.header}>
            <h3>Percentual total de acertos</h3>
          </div>
          <h1>{statistic.percentageGeneralHits}</h1>
        </div>

        <div className={style.card}>
          <div className={style.header}>
            <h3>Seleção de alternativas</h3>
          </div>
          <div className={style.row}>
            <div className={style.column}>
              {statistic.alternativesOfQuestion
            && statistic.alternativesOfQuestion.map((alternative) => (

              <span>{alternative.option}</span>
            ))}
            </div>
            <div className={style.column}>
              {statistic.alternativesOfQuestion
            && statistic.alternativesOfQuestion.map((alternative) => (

              <span>{alternative.percentageSelectedThis}</span>
            ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
