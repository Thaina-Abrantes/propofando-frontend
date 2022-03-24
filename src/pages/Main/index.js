import AdminPanel from 'components/AdminPanel';
import Header from 'components/Header';
import Modal from 'components/Modal';
import { useStores } from 'stores';
import { Outlet } from 'react-router-dom';
import ModalDeleteUser from 'components/ModalDeleteUser';
import style from './styles.module.scss';

export function Main() {
  const {
    modalStore: {
      openModalEdit,
      openModalDelete,
    },
  } = useStores();
  return (
    <div className={style['container-main']}>
      <Header />
      <div className={style['div-wrapper']}>
        <AdminPanel />
        <div className={style['div-center']}>
          <Outlet />
        </div>
      </div>
      {openModalEdit && <Modal title="Editar dados" button="Salvar alterações" />}
      {openModalDelete && <ModalDeleteUser />}
    </div>
  );
}
