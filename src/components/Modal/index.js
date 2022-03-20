import clear from '../../assets/clear-icon.svg';
import style from './styles.module.scss';

function Modal({ title, button, setOpenModalEdit }) {
  return (
    <div className={style['background-modal']}>
      <div className={style.container}>
        <button
          className={style['btn-img']}
          onClick={() => setOpenModalEdit(false)}
        >
          <img src={clear} alt="close" />
        </button>
        <h2>{title}</h2>

        <form>
          <div className={style.wrapInputs}>
            <div className={style.containerInputs}>
              <label>Nome</label>
              <input className="input-light" placeholder="Nome" />
            </div>
            <div className={style.containerInputs}>
              <label>Email</label>
              <input className="input-light" placeholder="Email" />
            </div>
          </div>
          <div className={style.wrapInputBtn}>
            <div className={style.containerInputs}>
              <label>Senha</label>
              <input className="input-light" placeholder="Senha" type="password" />
            </div>
            <button className="button">{button}</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
