import SearchCategory from 'components/SearchCategory';
import { useState, useEffect } from 'react';
import { useStores } from 'stores';
import Paginator from 'components/Paginator';
import style from './styles.module.scss';
import topicIcon from '../../assets/topic-icon.svg';
import editIcon from '../../assets/edit-icon.svg';
import deleteIcon from '../../assets/delete-icon.svg';
import api from '../../services/api';

export function QuestionCategory() {
  const [dataCategory, setDataCategory] = useState([]);
  const {
    modalStore: {
      openModalDeleteCategory,
      setOpenModalDeleteCategory,
      openModalNewCategory,
      setOpenModalNewCategory,
    },
    categoryStore: {
      setCategoryInEditing,
      currentPage,
      totalPages,
      setTotalPage,
    },

  } = useStores();
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFkNmVlNjMzLTU5OWItNDY5MC04ZWU5LWRkNjJkNGQyY2FmNiIsImVtYWlsIjoibWFudUBlbWFpbC5jb20iLCJ1c2VyVHlwZSI6InN1cGVyIGFkbWluIiwiaWF0IjoxNjQ5ODU2MTI3LCJleHAiOjE2NDk5NDI1Mjd9.LXKQ7eJNaHpx1QMnqKV_Hi1zQcNFAfAv6nKsZnH1SGw';
  function handleOpenEdit(item) {
    setCategoryInEditing(item);
    setOpenModalNewCategory(true);
  }

  const pages = [];

  for (let page = 1; page <= totalPages; page += 1) {
    pages.push(page);
  }

  useEffect(() => {
    handleListCategory();
  }, [currentPage, openModalDeleteCategory, openModalNewCategory]);

  async function handleListCategory() {
    try {
      const response = await api.get(`/categories/paginated?page=${currentPage}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { data } = response;

      setDataCategory(data.categories);
      setTotalPage(data.totalPages);
    } catch (error) {
      return error;
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
                <button
                  onClick={() => handleOpenEdit(item)}
                >
                  <img src={editIcon} alt="editar" />
                </button>
                <button onClick={() => setOpenModalDeleteCategory(item.id)}><img src={deleteIcon} alt="deletar" /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Paginator />
    </main>
  );
}
