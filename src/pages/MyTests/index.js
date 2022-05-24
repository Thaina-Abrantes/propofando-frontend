import { useNavigate } from 'react-router-dom';
import { useStores } from 'stores';
import { useEffect, useState } from 'react';
import formatDate from 'utils/formatData';
import EmptySimulateds from 'components/EmptySimulateds';
import style from './styles.module.scss';
import seta from '../../assets/arrow-back-icon.svg';
import factCheck from '../../assets/fact-check-icon.svg';
import triangleDown from '../../assets/triangle-down.svg';
import triangleUp from '../../assets/triangle-up.svg';

export function MyTests() {
  const [listUserSimulated, setListUserSimulated] = useState([]);
  const [openSelect, setOpenSelect] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState('');

  const {
    simulatedStore: {
      handleListUserSimulated,
      setConsultingSimulated,
      setPage,
      setQuestionsSimulated,
    },
    userStore: {
      userData,
    },
  } = useStores();

  const navigate = useNavigate();

  const list = [
    { name: 'Todos', id: 1 },
    { name: 'Simulados finalizados', id: 2 },
    { name: 'Simulados pausados', id: 3 },
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

    if (selectedRadio === 'Simulados finalizados') {
      setListUserSimulated(testsCompleted);
    } else if (selectedRadio === 'Simulados pausados') {
      setListUserSimulated(testsPaused);
    } else if (selectedRadio === 'Todos') {
      setListUserSimulated(data);
    }
  }, [selectedRadio]);

  function handleRadioClick(e) {
    setSelectedRadio(e.target.value);
  }
  function isRadioSelected(value) {
    return selectedRadio === value;
  }

  return (
    <main className={style['container-my-tests']}>
      <div className={style.back}>
        <button onClick={() => navigate('/student/main')}>
          <img src={seta} alt="Seta" />
        </button>
        <h1>Meus simulados</h1>
      </div>
      {!listUserSimulated.length ? (
        <EmptySimulateds />
      )
        : (
          <>
            <div className={style.border}>
              <div className={style['container-filter']}>
                <span className={style['filter-span']}>
                  Filtrar por
                </span>
                <div className={style['container-input']}>
                  <div className={style.select}>
                    <div className={openSelect ? style['open-select'] : style['open-select-closed']} onClick={() => setOpenSelect(!openSelect)}>
                      {selectedRadio
                        ? <div className={style['selected-items']}><span>{selectedRadio}</span></div>
                        : <span>Selecionar</span>}
                      <img src={openSelect ? triangleUp : triangleDown} alt="Seta" />
                    </div>
                    {openSelect && (
                    <div className={style.options}>
                      {list.map((item) => (
                        <div key={item.id}>
                          <label className={style.option}>
                            <input
                              type="radio"
                              id={item.id}
                              name={item.name}
                              value={item.name}
                              checked={isRadioSelected(item.name)}
                              onChange={handleRadioClick}
                            />
                            <span className={style.checkmark} />
                            {item.name}
                          </label>
                        </div>
                      ))}
                    </div>
                    )}
                  </div>
                </div>
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
          </>
        )}
    </main>
  );
}
