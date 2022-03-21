import style from './styles.module.scss';
import logo from '../../assets/logo-dark.svg';
import arrow from '../../assets/arrow-back-icon-white.svg';

export function RedefinePassword() {
  return (
    <div className={style['container-main']}>
      <div className={style['container-imgs']}>
        <img className={style['arrow-img']} src={arrow} alt="Seta voltar" />
        <img src={logo} alt="Logo" />
      </div>
      <div className={style['container-card']}>
        <h1>Redefinir senha</h1>
        <p>
          Preencha os campos abaixo para definir uma
          <br />
          nova senha
        </p>
        <input
          className="input"
          name="password"
          type="text"
          placeholder="Nova senha"
        />
        <input
          className="input"
          name="password"
          type="text"
          placeholder="Confirmar senha"
        />
        <button className="button">
          Confirmar
        </button>
      </div>
    </div>
  );
}
