import { useStores } from 'stores';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useUser } from '../../stores/userStore';
import style from './styles.module.scss';
import close from '../../assets/clear-icon.svg';
import api from '../../services/api';

export default function ReportProblem() {
  const { token } = useUser();

  const [problem, setProblem] = useState('');
  const [errorReport, setErrorReport] = useState('');

  const {
    utilsStore: {
      setOpenReportProblem,
      setAlert,
    },
    simulatedStore: {
      dataAnswers,
      page,
    },
  } = useStores();

  const { handleSubmit } = useForm();

  async function onSubmit() {
    try {
      const body = { description: problem };

      const questionId = dataAnswers[page].id;

      const response = await api.post(`/users/report-problem/question/${questionId}`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const { data } = response;

      if (response.status > 204) {
        setAlert({ open: true, type: 'error', message: data?.message || data });
        setProblem('');
        setOpenReportProblem(false);
        return;
      }

      setAlert({ open: true, type: 'success', message: data?.message || data });
    } catch (err) {
      const erro = err.response.data.message || err.response.data;
      setErrorReport(erro);
      return err.response;
    }

    setErrorReport('');
    setProblem('');
    setOpenReportProblem(false);
  }

  function handleChange(value) {
    setProblem(value);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={style['container-report']}>
        <div className={style.imgClose} onClick={() => setOpenReportProblem(false)}>
          <img src={close} alt="Fechar" />
        </div>
        <h1>Reportar problema</h1>
        <textarea
          placeholder="Conte-nos qual problema encontrou na questão. Sua contribuição é muito importante para nós."
          onChange={(e) => { handleChange(e.target.value); }}
        />
        <button className="button">Reportar</button>
      </div>
    </form>
  );
}
