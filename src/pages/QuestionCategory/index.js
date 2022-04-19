import SearchCategory from 'components/SearchCategory';
import { useState, useEffect } from 'react';
import { useStores } from 'stores';
import Paginator from 'components/Paginator';
import { useNavigate } from 'react-router-dom';
import style from './styles.module.scss';
import topicIcon from '../../assets/topic-icon.svg';
import editIcon from '../../assets/edit-icon.svg';
import deleteIcon from '../../assets/delete-icon.svg';
import api from '../../services/api';

export function QuestionCategory() {
  const {
    userStore: {
      token,
    },
    modalStore: {
      openModalDeleteCategory,
      setOpenModalDeleteCategory,
      openModalNewCategory,
      setOpenModalNewCategory,
    },
    categoryStore: {
      setCategoryInEditing,
      currentPage,
      setCurrentPage,
      totalPages,
      setTotalPage,
    },
    questionStore: {
      setIdCategory,
    },

  } = useStores();

  const [dataCategory, setDataCategory] = useState([]);
  const navigate = useNavigate();
  const [serchItem, setSearchItem] = useState('');

  function handleOpenEdit(item) {
    setCategoryInEditing(item);
    setOpenModalNewCategory(true);
  }

  function handleOpenQuestions(item) {
    setIdCategory(item);
    navigate('/main/list-question');
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
      return;
    } catch (error) {
      return error;
    }
  }

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
          {dataCategory.filter((item) => item.name.toLocaleLowerCase()
            .includes(serchItem.toLocaleLowerCase()))
            .map((item) => (
              <div className={style['table-line']} key={item.id}>
                <div className={style['first-line-item']} onClick={() => handleOpenQuestions(item.id)}>
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
      <Paginator setCurrentPage={setCurrentPage} totalPages={totalPages} />
    </main>
  );
}
