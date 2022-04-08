import SearchCategory from 'components/SearchCategory';
import { useState, useEffect } from 'react';
import style from './styles.module.scss';
import topicIcon from '../../assets/topic-icon.svg';
import editIcon from '../../assets/edit-icon.svg';
import deleteIcon from '../../assets/delete-icon.svg';
import api from '../../services/api';

export function QuestionCategory() {
  const [dataCategory, setDataCategory] = useState([]);
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFkNmVlNjMzLTU5OWItNDY5MC04ZWU5LWRkNjJkNGQyY2FmNiIsImVtYWlsIjoibWFudUBlbWFpbC5jb20iLCJ1c2VyVHlwZSI6InN1cGVyIGFkbWluIiwiaWF0IjoxNjQ5NDQ2NDA1LCJleHAiOjE2NDk1MzI4MDV9._0UP_a4eUDeD4JPTIonoyWxPCUQl3oHZ0miAo89FBpI';

  useEffect(() => {
    handleListCategory();
  }, []);

  async function handleListCategory() {
    try {
      const response = await api.get('/categories/paginated', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { data } = response;

      setDataCategory(data.categories);
    } catch (error) {
      return error.message;
    }
  }
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
          {dataCategory.map((item) => (
            <div key={item.id} className={style['table-line']}>
              <div className={style['first-line-item']}>
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
                <button><img src={deleteIcon} alt="deletar" /></button>
              </div>
            </div>
          ))}

        </div>
      </div>
    </main>
  );
}
