import Header from 'components/Header';
import style from './styles.module.scss';

export function Main() {
  return (
    <div className={style['container-main']}>
      <Header />
      <h1>Hello World</h1>
      <h1>Footer</h1>
    </div>
  );
}
