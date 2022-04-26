import style from './styles.module.scss';
import clear from '../../assets/clear-icon.svg';

function ModalPauseTest() {
  return (
    <div className={style['background-modal']}>
      <div className={style.container}>
        <div className={style['btn-close']}>
          <button>
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
          <button className="button">Pausar</button>
        </div>
      </div>
    </div>
  );
}

export default ModalPauseTest;
