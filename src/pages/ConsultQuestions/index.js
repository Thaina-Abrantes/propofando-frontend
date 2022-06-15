import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStores } from 'stores';
import Explanation from 'components/Explanation';
import QuestionStatistics from 'components/QuestionStatistics';
import ReportProblem from 'components/ReportProblem';
import style from './styles.module.scss';
import arrow from '../../assets/arrow-back-icon.svg';
import reportIcon from '../../assets/error-icon.svg';
import errorIcon from '../../assets/alert-error-close.svg';
import success from '../../assets/success-icon.svg';
import analytics from '../../assets/analytics-icon.svg';
import school from '../../assets/school-icon.svg';

export function ConsultQuestions() {
  const navigate = useNavigate();

  const {
    simulatedStore: {
      handleConsultAnswers,
      consultingSimulated,
      questionsSimulated,
      setQuestionsSimulated,
      page,
      setPage,
    },
    userStore: {
      token,
    },
    utilsStore: {
      openReportProblem,
      setOpenReportProblem,
      openExplanation,
      setOpenExplanation,
      openQuestionStatistics,
      setOpenQuestionStatistics,
      handleOpenExplanation,
      handleOpenQuestionStatistics,
      handleOpenReportProblem,
      handleCloseBox,
    },
  } = useStores();

  useEffect(async () => {
    const data = await handleConsultAnswers(consultingSimulated.id, token);
    setQuestionsSimulated(data);
  }, [token]);

  function handleClickPrev() {
    if (page === 0) {
      setPage(page);
    } else {
      setPage(page - 1);
    }
    handleCloseBox();
  }

  function handleClickNext() {
    setPage(page + 1);
    handleCloseBox();
  }

  function handleRedirect() {
    setOpenReportProblem(false);
    setOpenExplanation(false);
    setOpenQuestionStatistics(false);
    return navigate('/student/main/my-tests');
  }

  if (questionsSimulated.length >= 1) {
    return (
      <main className={style['container-consult']}>
        <div className={style['container-title']}>
          <button onClick={() => handleRedirect()}>
            <img src={arrow} alt="Seta" />
          </button>
          <h1>Simulado</h1>
        </div>
        <div className={style.container}>
          <div className={style['container-question']}>
            <h1 className={style['question-title']}>
              {questionsSimulated[page].title}
            </h1>

            <p className={style['question-statment']}>
              {questionsSimulated[page].description}
            </p>
            {
              questionsSimulated[page].image !== null
                ? <img className={style.questionImg} src={questionsSimulated[page].image} alt="Imagem" />
                : <div />
            }
            <div className={style['alternatives']}>
              {questionsSimulated[page].alternatives.map((alternative) => (
                <div
                  key={alternative.id}
                  className={alternative.correct
                    ? style.background : style.alternative}
                >
                  {
                    alternative.correct
                      ? <img src={success} alt="Certo" />
                      : <img src={errorIcon} alt="Erro" />
                  }
                  {
                    alternative.isUserAnswer
                      ? <div className={style.inputCorrect} />
                      : <div className={style.inputError} />
                  }
                  <span className={!alternative.correct && style.errorSpan}>
                    {alternative.option}
                    {' '}
                    {alternative.description}
                  </span>
                </div>
              ))}
            </div>
            <div className={style['container-links']}>
              <div className={style.links}>
                <button onClick={() => handleOpenExplanation()}>
                  <img src={school} alt="Ícone de erro" />
                  <span>Consultar explicação</span>
                </button>
              </div>

              <div className={style.links}>
                <button onClick={() => handleOpenQuestionStatistics()}>
                  <img src={analytics} alt="Ícone de erro" />
                  <span>Estatísticas da questão</span>
                </button>
              </div>

              <div className={style.links}>
                <button onClick={() => handleOpenReportProblem()}>
                  <img src={reportIcon} alt="Ícone de erro" />
                  <span>Reportar problema</span>
                </button>
              </div>
            </div>

            <div className={style.progress}>
              <span>
                Respondidas
                {' '}
                {questionsSimulated.length}
                {' '}
                de
                {' '}
                {questionsSimulated.length}
              </span>
            </div>
          </div>

          {openExplanation && (<Explanation />)}
          {openQuestionStatistics && (<QuestionStatistics />)}
          {openReportProblem && (<ReportProblem />)}

          <div className={style.buttons}>
            <button className={page === 0 ? 'displayNone' : 'button'} onClick={() => handleClickPrev()}>Anterior</button>
            <button className={page === questionsSimulated.length - 1 ? 'displayNone' : 'button'} onClick={() => handleClickNext()}>Próxima</button>
          </div>
        </div>
      </main>
    );
  }
  return null;
}
