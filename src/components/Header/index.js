import style from './styles.module.scss';
import Logo from '../../assets/logo-light.svg';
import User from '../../assets/accoutn-circle.svg';
import { useStores } from '../../stores';

function Header() {
  const {
    userStore: {
      userData,
    },
  } = useStores();
  const currentName = userData.name.split(' ');
  return (
    <header className={style.container}>
      <img src={Logo} alt="logo" />
      <div className={style.userContainer}>
        <span>{currentName[0]}</span>
        <img src={User} alt="usuário" />
      </div>

    </header>
  );
}

export default Header;
