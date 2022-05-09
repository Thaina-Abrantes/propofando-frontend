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
import api from '../../services/api';
import { useUser } from '../../stores/userStore';

export function ConsultQuestions() {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [dataAnswers, setDataAnswers] = useState([]);
  const [testId, setTestId] = useState('455adc85-578c-4f22-9595-9de1720261d3');

  const { token } = useUser();

  const {
    utilsStore: {
      openReportProblem,
      openExplanation,
      openQuestionStatistics,
      handleOpenExplanation,
      handleOpenQuestionStatistics,
      handleOpenReportProblem,
      handleCloseBox,
    },
  } = useStores();

  useEffect(() => {
    handleConsultAnswers();
  }, []);

  async function handleConsultAnswers() {
    try {
      const response = await api.get(`/simulated/${testId}/answers`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { data } = response;
      setDataAnswers(data);
    } catch (error) {
      return error.response;
    }
  }

  function handleClickPrev() {
    setPage(page - 1);
    handleCloseBox();
  }

  function handleClickNext() {
    setPage(page + 1);
    handleCloseBox();
  }

  if (dataAnswers) {
    return (
      <main className={style['container-consult']}>
        <div className={style['container-title']}>
          <button onClick={() => navigate('/student/main/my-tests')}>
            <img src={arrow} alt="Seta" />
          </button>
          <h1>Simulado</h1>
        </div>
        <div className={style.container}>
          <div className={style['container-question']}>
            <h1 className={style['question-title']}>
              {dataAnswers[page].title}
            </h1>

            <p className={style['question-statment']}>
              {dataAnswers[page].description}
            </p>
            {
              dataAnswers[page].image !== null
                ? <img className={style.questionImg} src={dataAnswers[page].image} alt="Imagem" />
                : <div />
            }
            <div className={style['alternatives']}>
              {dataAnswers[page].alternatives.map((option) => (
                <div
                  key={option.id}
                  className={option.correct
                    ? style.background : style.alternative}
                >
                  {
                    option.correct
                      ? <img src={success} alt="Certo" />
                      : <img src={errorIcon} alt="Erro" />
                  }
                  {
                    option.isUserAnswer
                      ? <div className={style.inputCorrect} />
                      : <div className={style.inputError} />
                  }
                  <span className={!option.correct && style.errorSpan}>
                    A)
                    {' '}
                    {option.description}
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
                {dataAnswers.length}
                {' '}
                de
                {' '}
                {dataAnswers.length}
              </span>
            </div>
          </div>

          {openExplanation && (<Explanation />)}
          {openQuestionStatistics && (<QuestionStatistics />)}
          {openReportProblem && (<ReportProblem />)}

          <div className={style.buttons}>
            <button className={page === 0 ? 'displayNone' : 'button'} onClick={() => handleClickPrev()}>Anterior</button>
            <button className={page === dataAnswers.length - 1 ? 'displayNone' : 'button'} onClick={() => handleClickNext()}>Próxima</button>
          </div>
        </div>
      </main>
    );
  }
  return null;
}
