import style from './styles.module.scss';
import Logo from '../../assets/logo-light.svg';
import User from '../../assets/accoutn-circle.svg';

function Header() {
  return (
    <header className={style.container}>
      <img src={Logo} alt="logo" />
      <div className={style.userContainer}>
        <span>Usuário</span>
        <img src={User} alt="usuário" />
      </div>

    </header>
  );
}

export default Header;
