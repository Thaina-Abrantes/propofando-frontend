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

  const {
    simulatedStore: { handleListUserSimulated },
    userStore: {
      userData,
    },
  } = useStores();

  const navigate = useNavigate();

  const lista = [
    { name: 'Item a', id: 1 },
    { name: 'Item b', id: 2 },
    { name: 'Item c', id: 3 },
  ];

  useEffect(async () => {
    const data = await handleListUserSimulated(userData.id);
    setListUserSimulated(data);
  }, []);
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
          <InputDropdown list={lista} />
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
              <button className="button" onClick={() => navigate('/student/main/consult-questions')}>Consultar respostas</button>
            </div>
          </div>
        ))}

      </div>
    </main>
  );
}
