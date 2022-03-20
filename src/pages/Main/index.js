import AdminPanel from 'components/AdminPanel';
import Header from 'components/Header';
// import Modal from 'components/Modal';
import Search from 'components/Search';
import TableUser from 'components/TableUser';

import style from './styles.module.scss';

export function Main() {
  return (
    <div className={style['container-main']}>
      <Header />
      <div className={style['div-wrapper']}>
        <AdminPanel />
        <div className={style['div-center']}>
          <Search />
          <TableUser />
        </div>
      </div>
      {/* <Modal title="Editar dados" button="Salvar alterações" /> */}
    </div>
  );
}
