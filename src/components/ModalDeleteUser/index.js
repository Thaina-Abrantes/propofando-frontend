import { useStores } from 'stores';
import style from './styles.module.scss';
import clear from '../../assets/clear-icon.svg';

function ModalDeleteUser() {
  const {
    modalStore: {
      openModalDelete,
      setOpenModalDelete,
    },
    userStore: {
      token,
    },
    studentAdminStore: {
      handleDeleteUser,
      errorUser,
    },
    utilsStore: { setAlert },
  } = useStores();

  async function handleModalDelete() {
    const response = await handleDeleteUser(openModalDelete, token);
    if (response.status > 204) {
      setAlert({ open: true, type: 'error', message: response.data.message });
      return;
    }
    setAlert({ open: true, type: 'success', message: response.data.message });
    setOpenModalDelete(false);
  }
  return (
    <div className={style.background}>
      <div className={style.container}>
        <div className={style['btn-close']}>
          <button
            onClick={() => setOpenModalDelete(false)}
          >
            <img src={clear} alt="Close" />

          </button>
        </div>
        <div>
          <h2>
            Excluir cadastro
          </h2>
          <p>
            Tem certeza que deseja excluir esse cadastro? Essa ação não poderá ser desfeita.
          </p>
          <button
            className="button"
            onClick={handleModalDelete}
          >
            Excluir

          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalDeleteUser;
