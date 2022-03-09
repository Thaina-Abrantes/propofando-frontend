import Logo from 'assets/logo.svg';
import style from './styles.module.scss';

function Header() {
  return (
    <header className={style.container}>
      <img src={Logo} alt="logo" />
    </header>
  );
}

export default Header;
