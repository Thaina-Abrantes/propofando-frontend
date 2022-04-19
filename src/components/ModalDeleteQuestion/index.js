import { useStores } from 'stores';
import style from './styles.module.scss';
import clear from '../../assets/clear-icon.svg';

function ModalDeleteQuestion() {
  const {
    questionStore: {
      handleDeleteQuestion,
    },
    modalStore: {
      openModalDeleteQuestion,
      setOpenModalDeleteQuestion,
    },
  } = useStores();

  function handleCloseModalDeleteQuestion() {
    handleDeleteQuestion(openModalDeleteQuestion);
    setOpenModalDeleteQuestion(false);
  }

  return (
    <div className={style.background}>
      <div className={style.container}>
        <div className={style['btn-close']}>
          <button
            onClick={() => setOpenModalDeleteQuestion(false)}
          >
            <img src={clear} alt="Close" />

          </button>
        </div>
        <div>
          <h2>
            Excluir questão
          </h2>
          <p>
            Tem certeza que deseja excluir essa questão? Essa ação não poderá ser desfeita.
          </p>
          <button
            onClick={handleCloseModalDeleteQuestion}
            className="button"
          >
            Excluir

          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalDeleteQuestion;
