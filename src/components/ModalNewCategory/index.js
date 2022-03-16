import style from './styles.module.scss';
import clear from '../../assets/clear-icon.svg';

function ModalNewCategory() {
  return (
    <div className={style.container}>
      <img src={clear} alt="Close" />
      <div>
        <h2>Nova categoria</h2>

        <label>
          Título
        </label>
        <input className="input-light" />

        <button className="button">Adicionar categoria</button>
      </div>
    </div>
  );
}

export default ModalNewCategory;
