import { useStores } from 'stores';
import { useNavigate, useLocation } from 'react-router-dom';
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
    utilsStore: { setAlert },
  } = useStores();

  const location = useLocation();
  const navigate = useNavigate();

  function handleCloseModalDeleteQuestion() {
    handleDeleteQuestion(openModalDeleteQuestion);
    if (location.pathname === '/main/add-question') {
      navigate('/main/question-category');
    }
    setOpenModalDeleteQuestion(false);
    setAlert({ open: true, type: 'success', message: 'Questão removida!' });
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
