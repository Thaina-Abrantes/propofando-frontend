import AdminPanel from 'components/AdminPanel';
import Header from 'components/Header';
import Search from 'components/Search';

import style from './styles.module.scss';

export function Main() {
  return (
    <div className={style['container-main']}>
      <Header />
      <div>
        <AdminPanel />
        <Search />
      </div>
    </div>
  );
}
