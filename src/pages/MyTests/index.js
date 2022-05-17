import { useNavigate } from 'react-router-dom';
import { InputDropdown } from 'components/InputDropdown';
import { useStores } from 'stores';
import { useEffect, useState } from 'react';
import formatDate from 'utils/formatData';
import style from './styles.module.scss';
import seta from '../../assets/arrow-back-icon.svg';
import factCheck from '../../assets/fact-check-icon.svg';

export function MyTests() {
  const [listUserSimulated, setListUserSimulated] = useState([]);
  const [typeOfTests, setTypeOfTests] = useState('');

  const {
    simulatedStore: {
      handleListUserSimulated,
      setConsultingSimulated,
    },
    userStore: {
      userData,
    },
  } = useStores();

  const navigate = useNavigate();

  const list = [
    { name: 'Simulados finalizados', id: 1 },
    { name: 'Simulados pausados', id: 2 },
  ];

  function handleRedirect(simulated) {
    setConsultingSimulated(simulated);
    if (!simulated?.active) {
      return navigate('/student/main/consult-questions');
    }
    return navigate('/test');
  }

  useEffect(async () => {
    const data = await handleListUserSimulated(userData.id);
    setListUserSimulated(data);

    const testsCompleted = data.filter((test) => !test.active);
    const testsPaused = data.filter((test) => test.active);

    if (typeOfTests === 'Simulados finalizados') {
      setListUserSimulated(testsCompleted);
    } else if (typeOfTests === 'Simulados pausados') {
      setListUserSimulated(testsPaused);
    } else if (typeOfTests === 'Todos') {
      setListUserSimulated(data);
    }
  }, [typeOfTests]);

  return (
    <main className={style['container-my-tests']}>
      <div className={style.back}>
        <img src={seta} alt="Seta" />
        <h1>Meus simulados</h1>
      </div>
      <div className={style.border}>
        <div className={style['container-filter']}>
          <span>
            Filtrar por
          </span>
          <InputDropdown
            list={list}
            setTypeOfTests={setTypeOfTests}
            typeOfTests={typeOfTests}
          />
        </div>
      </div>

      <div className={style['table-body']}>

        {listUserSimulated.map((simulated) => (
          <div className={style['table-line']} key={simulated.id}>
            <div className={style['first-item']}>
              <img src={factCheck} alt="listar" />
              <span>{formatDate(simulated.createdAt)}</span>
            </div>
            <div className={style['second-item']}>
              <span>{simulated.name}</span>
            </div>
            <div className={style['third-item']}>
              {!simulated?.active
                ? (
                  <button
                    className="button"
                    onClick={() => handleRedirect(simulated)}
                  >
                    Consultar respostas
                  </button>
                )
                : (
                  <button
                    className="button"
                    onClick={() => handleRedirect(simulated)}
                  >
                    Continuar simulado
                  </button>
                )}
            </div>
          </div>
        ))}

      </div>
    </main>
  );
}
