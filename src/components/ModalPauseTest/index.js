import { useStores } from 'stores';
import { useNavigate } from 'react-router-dom';
import style from './styles.module.scss';
import clear from '../../assets/clear-icon.svg';

function ModalPauseTest() {
  const navigate = useNavigate();

  const {
    modalStore: {
      setOpenModalPauseTest,
    },
  } = useStores();

  function handlePauseTest() {
    setOpenModalPauseTest(false);
    navigate('/student/main');
  }

  return (
    <div className={style['background-modal']}>
      <div className={style.container}>
        <div className={style['btn-close']}>
          <button onClick={() => setOpenModalPauseTest(false)}>
            <img src={clear} alt="Close" />
          </button>
        </div>
        <div>
          <h2>
            Pausar simulado
          </h2>
          <p>
            Tem certeza que deseja pausar o simulado?
          </p>
          <button className="button" onClick={handlePauseTest}>Pausar</button>
        </div>
      </div>
    </div>
  );
}

export default ModalPauseTest;
