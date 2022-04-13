import SearchCategory from 'components/SearchCategory';
import { useNavigate } from 'react-router-dom';
import { useStores } from 'stores';
import { useEffect, useState } from 'react';
import style from './styles.module.scss';
import topicIcon from '../../assets/topic-icon.svg';
import editIcon from '../../assets/edit-icon.svg';
import deleteIcon from '../../assets/delete-icon.svg';
import api from '../../services/api';

export function QuestionCategory() {
  const navigate = useNavigate();
  const [serchItem, setSearchItem] = useState('');
  const [allCategories, setAllCategories] = useState([]);

  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjUzMTNmNTdhLTJiMzQtNDU0Yi04ZTJlLTEyOGQ2NDllNGJkOSIsImVtYWlsIjoibWFudUBlbWFpbC5jb20iLCJ1c2VyVHlwZSI6InN1cGVyIGFkbWluIiwiaWF0IjoxNjQ5NzkyOTkzLCJleHAiOjE2NDk4NzkzOTN9.vaAeQmJW0MvrqlOs47l6rqogh-jraZUR9qior1pS15E';

  useEffect(() => {
    handleFilterCategory();
  }, [allCategories]);

  async function handleFilterCategory() {
    try {
      const response = await api.get('/categories', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { data } = response;
      setAllCategories(data);
    } catch (error) {
      console.log(error);
    }
  }

  const {
    modalStore: {
      openModalDeleteCategory,
      setOpenModalDeleteCategory,
    },
  } = useStores();

  return (
    <main>
      <SearchCategory setSearchTerm={setSearchItem} />
      <div className={style['table']}>
        <div className={style['table-header']}>
          <div className={style['name-title']}><span>Nome</span></div>
          <div className={style['category-title']}><span>Quantidade</span></div>
          <div className={style['manage-title']}><span>Gerenciar</span></div>
        </div>
        <div className={style['table-body']}>
          {allCategories.filter((item) => item.name.toLocaleLowerCase()
            .includes(serchItem.toLocaleLowerCase()))
            .map((item) => (
              <div className={style['table-line']} key={item.id}>
                <div className={style['first-line-item']} onClick={() => navigate('/main/list-question')}>
                  <img src={topicIcon} alt="Categoria" />
                  <span>{item.name}</span>
                </div>
                <div className={style['second-line-item']}>
                  <span>{item.totalQuestions}</span>
                </div>

                <div className={style['third-line-item']}>
                  <button>
                    <img src={editIcon} alt="editar" />
                  </button>
                  <button onClick={() => setOpenModalDeleteCategory(true)}><img src={deleteIcon} alt="deletar" /></button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
}
