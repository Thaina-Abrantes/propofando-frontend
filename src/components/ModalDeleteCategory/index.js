import { useStores } from 'stores';
import style from './styles.module.scss';
import clear from '../../assets/clear-icon.svg';

function ModalDeleteCategory() {
  const {
    categoryStore: {
      handleDeleteCategory,
    },
    userStore: {
      token,
    },
    modalStore: {
      openModalDeleteCategory,
      setOpenModalDeleteCategory,
    },
    utilsStore: { setAlert },
  } = useStores();

  async function handleDeleteCategoryCloseModal() {
    const response = await handleDeleteCategory(openModalDeleteCategory, token);
    if (response.status > 204) {
      setAlert({ open: true, type: 'error', message: response.data.message });
      return;
    }
    setAlert({ open: true, type: 'success', message: response.data.message });
    setOpenModalDeleteCategory(false);
  }

  return (
    <div className={style.background}>
      <div className={style.container}>
        <div className={style['btn-close']}>
          <button
            onClick={() => setOpenModalDeleteCategory(false)}
          >
            <img src={clear} alt="Close" />

          </button>
        </div>
        <div>
          <h2>
            Excluir categoria
          </h2>
          <p>
            Tem certeza que deseja excluir essa categoria? Essa ação não poderá ser desfeita.
          </p>
          <button
            onClick={() => handleDeleteCategoryCloseModal()}
            className="button"
          >
            Excluir

          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalDeleteCategory;
