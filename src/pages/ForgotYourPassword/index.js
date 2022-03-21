/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable max-len */
import style from './styles.module.scss';
import logo from '../../assets/logo-dark.svg';
import arrow from '../../assets/arrow-back-icon-white.svg';

export function ForgotYourPassword() {
  return (
    <div className={style['container-main']}>
      <div className={style['container-imgs']}>
        <img className={style['arrow-img']} src={arrow} alt="Seta voltar" />
        <img src={logo} alt="Logo" />
      </div>
      <div className={style['container-card']}>
        <h1>Esqueceu sua senha?</h1>
        <p>
          Digite o endereço de e-mail associado à sua
          <br />
          conta e enviaremos um link para redefinir sua
          <br />
          senha.
        </p>
        <input
          className="input"
          name="email"
          type="text"
          placeholder="Email"
        />
        <button className="button">
          Enviar
        </button>
      </div>
    </div>
  );
}
