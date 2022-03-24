import style from './styles.module.scss';
import clear from '../../assets/clear-icon.svg';

function ModalEndTest() {
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
            Finalizar simulado
          </h2>
          <p>
            Tem certeza que deseja finalizar o simulado?
          </p>
          <button className="button">Finalizar</button>
        </div>
      </div>
    </div>
  );
}

export default ModalEndTest;
