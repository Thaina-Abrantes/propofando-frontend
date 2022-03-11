import LogoPropofando from '../../assets/propofando.svg';
import style from './styles.module.scss';

export function Login() {
  return (
    <div className={style.container}>

      <div className={style.containerCard}>
        <img src={LogoPropofando} alt="Logo Propofando" />

        <form>
          <span>Faça seu Login</span>
          <input type="text" placeholder="email" />
          <input placeholder="senha" type="password" />
          <div>
            <button>Entrar</button>
          </div>
        </form>
      </div>

    </div>
  );
}
