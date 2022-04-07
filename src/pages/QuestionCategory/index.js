import SearchCategory from 'components/SearchCategory';
import { useNavigate } from 'react-router-dom';
import { useStores } from 'stores';
import style from './styles.module.scss';
import topicIcon from '../../assets/topic-icon.svg';
import editIcon from '../../assets/edit-icon.svg';
import deleteIcon from '../../assets/delete-icon.svg';

export function QuestionCategory() {
  const navigate = useNavigate();

  const {
    modalStore: {
      openModalDeleteCategory,
      setOpenModalDeleteCategory,
    },
  } = useStores();

  return (
    <main>
      <SearchCategory />
      <div className={style['table']}>
        <div className={style['table-header']}>
          <div className={style['name-title']}><span>Nome</span></div>
          <div className={style['category-title']}><span>Quantidade</span></div>
          <div className={style['manage-title']}><span>Gerenciar</span></div>
        </div>
        <div className={style['table-body']}>
          <div className={style['table-line']}>
            <div className={style['first-line-item']} onClick={() => navigate('/main/list-question')}>
              <img src={topicIcon} alt="Categoria" />
              <span>Categoria A</span>
            </div>
            <div className={style['second-line-item']}>
              <span>30</span>
            </div>

            <div className={style['third-line-item']}>
              <button>
                <img src={editIcon} alt="editar" />
              </button>
              <button onClick={() => setOpenModalDeleteCategory(true)}><img src={deleteIcon} alt="deletar" /></button>
            </div>
          </div>
          <div className={style['table-line']}>
            <div className={style['first-line-item']} onClick={() => navigate('/main/list-question')}>
              <img src={topicIcon} alt="Categoria" />
              <span>Categoria B</span>
            </div>
            <div className={style['second-line-item']}>
              <span>40</span>
            </div>

            <div className={style['third-line-item']}>
              <button>
                <img src={editIcon} alt="editar" />
              </button>
              <button onClick={() => setOpenModalDeleteCategory(true)}><img src={deleteIcon} alt="deletar" /></button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
