import { useStores } from 'stores';
import { useNavigate } from 'react-router-dom';
import style from './styles.module.scss';
import logo from '../../assets/logo-dark.svg';
import userImg from '../../assets/accoutn-circle.svg';

export default function StudentHeader() {
  const {
    userStore: {
      userData,
    },
  } = useStores();
  const navigate = useNavigate();
  const currentName = userData.name.split(' ');
  return (
    <header className={style['header-container']}>
      <button onClick={() => navigate('/student/main')}><img src={logo} alt="Logo" /></button>
      <div className={style['user-container']}>
        <span>{currentName[0]}</span>
        <img src={userImg} alt="Usuário" />
      </div>
    </header>
  );
}
