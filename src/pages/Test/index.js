import StudentHeader from 'components/StudentHeader';
import { useEffect, useState } from 'react';
import { useStores } from 'stores';
import { useNavigate } from 'react-router-dom';
import ModalEndTest from 'components/ModalEndTest';
import ReportProblem from 'components/ReportProblem';
import ModalPauseTest from 'components/ModalPauseTest';
import style from './styles.module.scss';
import arrow from '../../assets/arrow-back-icon.svg';
import reportIcon from '../../assets/error-icon.svg';
import api from '../../services/api';

export function Test() {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [selectedRadio, setSelectedRadio] = useState('');

  const {
    modalStore: {
      openModalEndTest,
      setOpenModalEndTest,
      openModalPauseTest,
      setOpenModalPauseTest,
    },
    questionStore: {
      handleListRandomQuestions,
      handleAnswereSimulated,
      randomQuestions,
    },
    utilsStore: {
      openReportProblem,
      setOpenReportProblem,
      setAlert,
    },
    userStore: {
      token,
      userData,
    },
    simulatedStore: {
      idSimulated, consultingSimulated, handleConsultAnswers, setDataAnswers,
    },
  } = useStores();
  useEffect(async () => {
    await handleListRandomQuestions(
      consultingSimulated.id,
      userData.id,
      token,
    );
  }, [selectedRadio, token]);

  async function handleRadioClick(e) {
    const response = await handleAnswereSimulated(randomQuestions[page].id, e.target.value, token);
    if (response.status > 204) {
      setAlert({ open: true, type: 'error', message: response.data.message });
      return;
    }
    setAlert({ open: true, type: 'success', message: response.data.message });
    setSelectedRadio(e.target.value);
  }
  function isRadioSelected(value) {
    return randomQuestions[page].altenativeId === value;
  }
  function handleClickPrev() {
    setPage(page - 1);
    setOpenReportProblem(false);
  }

  async function handleClickNext() {
    setPage(page + 1);
    setOpenReportProblem(false);
  }

  async function handleClickEnd() {
    setOpenReportProblem(false);
    setOpenModalEndTest(true);

    try {
      const body = {
        simulatedId: consultingSimulated.id,
      };
      const response = await api.patch('/simulated/finish', body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status > 204) {
        setAlert({ open: true, type: 'error', message: response.data.message });
        return;
      }
      return response;
    } catch (error) {
      return error;
    }
  }

  function handleClickPause() {
    setOpenReportProblem(false);
    setOpenModalPauseTest(true);
  }

  if (randomQuestions.length < 1) {
    return null;
  }

  return (
    <main className={style['container-main']}>
      {
        openModalPauseTest
        && <ModalPauseTest />
      }
      {
        openModalEndTest
        && <ModalEndTest />
      }

      <StudentHeader />

      <div className={style['container-title']}>
        <button onClick={() => handleClickPause()}>
          <img src={arrow} alt="Seta" />
        </button>
        <h1>Simulado</h1>
      </div>

      <div className={style.container}>
        <div>
          {randomQuestions.length
            && (
              <div className={style['container-question']}>
                <h1 className={style['question-title']}>
                  {randomQuestions[page].title}
                </h1>

                <p className={style['question-statment']}>
                  {randomQuestions[page].description}
                </p>
                {
                  randomQuestions[page].image !== null
                    ? <img className={style.questionImg} src={randomQuestions[page].image} alt="Imagem" />
                    : <div />
                }
                <div className={style['alternatives']}>
                  <div className={style['container-alternative']}>
                    <input
                      type="radio"
                      id="optionA"
                      name="alternative"
                      value={randomQuestions[page].alternatives[0].id}
                      checked={isRadioSelected((randomQuestions[page].alternatives[0].id))}
                      onChange={handleRadioClick}
                    />
                    <label htmlFor="optionA">
                      A)
                      {' '}
                      {randomQuestions[page].alternatives[0].description}
                    </label>
                  </div>
                  <div className={style['container-alternative']}>
                    <input
                      type="radio"
                      id="optionB"
                      name="alternative"
                      value={randomQuestions[page].alternatives[1].id}
                      checked={isRadioSelected((randomQuestions[page].alternatives[1].id))}
                      onChange={handleRadioClick}
                    />
                    <label htmlFor="optionB">
                      B)
                      {' '}
                      {randomQuestions[page].alternatives[1].description}
                    </label>
                  </div>
                  <div className={style['container-alternative']}>
                    <input
                      type="radio"
                      id="optionC"
                      name="alternative"
                      value={randomQuestions[page].alternatives[2].id}
                      checked={isRadioSelected((randomQuestions[page].alternatives[2].id))}
                      onChange={handleRadioClick}
                    />
                    <label htmlFor="optionC">
                      C)
                      {' '}
                      {randomQuestions[page].alternatives[2].description}
                    </label>
                  </div>
                  <div className={style['container-alternative']}>
                    <input
                      type="radio"
                      id="optionD"
                      name="alternative"
                      value={randomQuestions[page].alternatives[3].id}
                      checked={isRadioSelected((randomQuestions[page].alternatives[3].id))}
                      onChange={handleRadioClick}
                    />
                    <label htmlFor="optionD">
                      D)
                      {' '}
                      {randomQuestions[page].alternatives[3].description}
                    </label>
                  </div>
                </div>

                <div className={style.reportProblem}>
                  <button onClick={() => setOpenReportProblem(true)}>
                    <img src={reportIcon} alt="Ícone de erro" />
                    <span>Reportar problema</span>
                  </button>
                </div>

                <div className={style.progress}>
                  <span>
                    Respondidas
                    {' '}
                    {page + 1}
                    {' '}
                    de
                    {' '}
                    {randomQuestions.length}
                  </span>
                </div>
              </div>
            )}

          {openReportProblem && (<ReportProblem />)}

          <div className={style.buttons}>
            <button className={page === 0 || page === randomQuestions.length - 1 ? 'displayNone' : 'button'} onClick={() => handleClickPrev()}>Anterior</button>
            <button className={page === randomQuestions.length - 1 ? 'button-dark-secondary' : 'displayNone'} onClick={() => handleClickPrev()}>Anterior</button>
            <button className={page < randomQuestions.length - 1 ? 'button' : 'displayNone'} onClick={() => handleClickNext()}>Próxima</button>
            <button className={page !== randomQuestions.length - 1 ? 'button-dark-secondary' : 'displayNone'} onClick={() => handleClickPause()}>Pausar simulado</button>
            <button className={page === randomQuestions.length - 1 ? 'button' : 'displayNone'} onClick={() => handleClickEnd()}>Finalizar simulado</button>
          </div>
        </div>
      </div>
    </main>
  );
}
