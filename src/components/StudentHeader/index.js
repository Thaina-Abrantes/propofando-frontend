import style from './styles.module.scss';
import logo from '../../assets/logo-dark.svg';
import userImg from '../../assets/accoutn-circle.svg';

export default function StudentHeader() {
  return (
    <header className={style['logo-container']}>
      <img src={logo} alt="Logo" />
      <div className={style['user-container']}>
        <span>Usuário</span>
        <img src={userImg} alt="Usuário" />
      </div>

    </header>
  );
}
