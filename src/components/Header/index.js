import style from './styles.module.scss';
import LogoDark from '../../assets/logo-dark.svg';

function Header() {
  return (
    <header className={style.container}>
      <img src={LogoDark} alt="logo" />
    </header>
  );
}

export default Header;
