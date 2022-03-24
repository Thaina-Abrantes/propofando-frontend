import style from './styles.module.scss';
import clear from '../../assets/clear-icon.svg';

function ModalNewCategory() {
  return (
    <div className={style.background}>
      <div className={style.container}>
        <div className={style['btn-close']}>
          <button>
            <img src={clear} alt="Close" />
          </button>
        </div>
        <div>
          <h2>Nova categoria</h2>

          <label>
            Título
          </label>
          <input className="input-light" placeholder="Categoria" />

          <button className="button">Adicionar categoria</button>
        </div>
      </div>
    </div>
  );
}

export default ModalNewCategory;
