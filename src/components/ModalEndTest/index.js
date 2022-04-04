import { useStores } from 'stores';
import style from './styles.module.scss';
import clear from '../../assets/clear-icon.svg';

function ModalEndTest() {
  const {
    modalStore: {
      setOpenModalEndTest,
    },
  } = useStores();

  return (
    <div className={style['background-modal']}>
      <div className={style.container}>
        <div className={style['btn-close']}>
          <button onClick={() => setOpenModalEndTest(false)}>
            <img src={clear} alt="Close" />
          </button>
        </div>
        <div>
          <h2>
            Finalizar simulado
          </h2>
          <p>
            Tem certeza que deseja finalizar o simulado?
          </p>
          <button className="button" onClick={() => setOpenModalEndTest(false)}>Finalizar</button>
        </div>
      </div>
    </div>
  );
}

export default ModalEndTest;
