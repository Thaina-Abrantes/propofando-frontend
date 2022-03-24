import AdminPanel from 'components/AdminPanel';
import Header from 'components/Header';
import Modal from 'components/Modal';
import Search from 'components/Search';
import { useStores } from 'stores';
import { Outlet } from 'react-router-dom';
import style from './styles.module.scss';

export function Main() {
  const {
    modalStore: {
      openModalEdit,
    },
  } = useStores();
  return (
    <div className={style['container-main']}>
      <Header />
      <div className={style['div-wrapper']}>
        <AdminPanel />
        <div className={style['div-center']}>
          <Search />
          <Outlet />
        </div>
      </div>
      {openModalEdit && <Modal title="Editar dados" button="Salvar alterações" />}
    </div>
  );
}
