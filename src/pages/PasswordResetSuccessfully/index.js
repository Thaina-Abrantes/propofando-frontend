import style from './styles.module.scss';
import logo from '../../assets/logo-dark.svg';
import arrow from '../../assets/arrow-back-icon-white.svg';
import icon from '../../assets/confirmation-icon.svg';

export function PasswordResetSuccessfully() {
  return (
    <div className={style['container-main']}>
      <div className={style['container-imgs']}>
        <img className={style['arrow-img']} src={arrow} alt="Seta voltar" />
        <img src={logo} alt="Logo" />
      </div>
      <div className={style['container-card']}>
        <img className={style['icon']} src={icon} alt="Ícone de confirmação" />
        <h1>Senha redefinida com sucesso!</h1>
        <p>
          Use a nova senha cadastrada para realizar o
          <br />
          login na plataforma.
        </p>
        <button className="button">
          Voltar para login
        </button>
      </div>
    </div>
  );
}
