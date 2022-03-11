import LogoDark from '../../assets/logo-dark.svg';
import style from './styles.module.scss';

export function Login() {
  return (
    <div className={style.container}>

      <div className={style.containerCard}>
        <img src={LogoDark} alt="Logo Propofando" />

        <form>
          <span>Faça seu Login</span>
          <input className="input" type="text" placeholder="email" />
          <input className="input" placeholder="senha" type="password" />
          <div>
            <button className="button">Entrar</button>
          </div>
        </form>
      </div>

    </div>
  );
}
