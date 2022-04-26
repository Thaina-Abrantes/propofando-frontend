import { useStores } from 'stores';
import style from './styles.module.scss';
import logo from '../../assets/logo-dark.svg';
import userImg from '../../assets/accoutn-circle.svg';

export default function StudentHeader() {
  const {
    userStore: {
      userData,
    },
  } = useStores();
  const currentName = userData.name.split(' ');
  return (
    <header className={style['header-container']}>
      <img src={logo} alt="Logo" />
      <div className={style['user-container']}>
        <span>{currentName[0]}</span>
        <img src={userImg} alt="Usuário" />
      </div>
    </header>
  );
}
