import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const currentName = userData.name.split(' ');
  return (
    <header className={style.container}>
      <button onClick={() => navigate('/main')}><img src={Logo} alt="logo" /></button>
      <div className={style.userContainer}>
        <span>{currentName[0]}</span>
        <img src={User} alt="usuário" />
      </div>

    </header>
  );
}

export default Header;
