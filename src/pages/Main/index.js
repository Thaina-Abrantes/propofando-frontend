import AdminPanel from 'components/AdminPanel';
import Header from 'components/Header';
import Search from 'components/Search';
import TableUser from 'components/TableUser';

import style from './styles.module.scss';

export function Main() {
  return (
    <div className={style['container-main']}>
      <Header />
      <div>
        <AdminPanel />
        <div className={style['div-center']}>
          <Search />
          <TableUser />
        </div>
      </div>
    </div>
  );
}
