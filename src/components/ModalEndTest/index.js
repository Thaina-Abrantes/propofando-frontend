import style from './styles.module.scss';
import clear from '../../assets/clear-icon.svg';

function ModalEndTest() {
  return (
    <div className={style.container}>
      <img src={clear} alt="Close" />
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
  );
}

export default ModalEndTest;
