import { useStores } from 'stores';
import Search from 'components/Search';
import ReactPaginate from 'react-paginate';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './styles.module.scss';
import userIcon from '../../assets/identity-icon.svg';
import editIcon from '../../assets/edit-icon.svg';
import deleteIcon from '../../assets/delete-icon.svg';
import api from '../../services/api';

export function Users() {
  const {
    modalStore: {
      openModalEdit,
      setOpenModalEdit,
      openModalDelete,
      setOpenModalDelete,
      openModalRegisterUser,
    },
    userStore: {
      token,
    },
    studentAdminStore: {
      setUserInEditing,
      userInEditing,
      dataUsers,
      setDataUsers,
      setTotalPage,
      currentPage,
      setErrorUser,
      searchUser,
      setOpenUserStatistics,
      setUserInfo,
    },
  } = useStores();
  const navigate = useNavigate();
  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 6;
  const pagesVisited = pageNumber * itemsPerPage;
  const pageCount = Math.ceil(dataUsers.length / itemsPerPage);
  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    handleListUsers();
  }, [currentPage, openModalRegisterUser, openModalDelete, openModalEdit, userInEditing]);

  function handleOpenEditUser(item) {
    setUserInEditing(item);
    setOpenModalEdit(true);
    setErrorUser('');
  }
  async function handleListUsers() {
    try {
      const response = await api.get('/users', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { data } = response;
      setDataUsers(data);
      setTotalPage(data.totalPages);
    } catch (error) {
      return error;
    }
  }

  const handleOpenUser = (item) => {
    setOpenUserStatistics(item);
    setUserInfo({ ...item });
    navigate('/main/student-statistics');
  };

  return (
    <main>
      <Search />
      <div className={style.table}>
        <div className={style['table-header']}>
          <div className={style['name-title']}><span>Nome</span></div>
          <div className={style['email-title']}><span>E-mail</span></div>
          <div className={style['hit-title']}><span>Acertos</span></div>
          <div className={style['manage-title']}><span>Gerenciar</span></div>
        </div>

        <div className={style['table-body']}>
          {dataUsers && dataUsers.filter((item) => item.name.toLocaleLowerCase()
            .replace(/[áàãäâ]/, 'a')
            .replace(/[éèëê]/, 'e')
            .replace(/[íìïî]/, 'i')
            .replace(/[óòõöô]/, 'o')
            .replace(/[úùüû]/, 'u')
            .includes(searchUser.toLocaleLowerCase()) || item.email.toLocaleLowerCase()
            .replace(/[áàãäâ]/, 'a')
            .replace(/[éèëê]/, 'e')
            .replace(/[íìïî]/, 'i')
            .replace(/[óòõöô]/, 'o')
            .replace(/[úùüû]/, 'u')
            .includes(searchUser.toLocaleLowerCase()))
            .slice(pagesVisited, pagesVisited + itemsPerPage)
            .map((item) => (
              <div className={style['table-line']} key={item.id}>
                <div
                  className={style['first-line-item']}
                  onClick={() => handleOpenUser(item)}
                >
                  <img src={userIcon} alt="Icone de usuário" />
                  <span>{item.name}</span>
                </div>
                <div className={style['second-line-item']}>
                  <span>{item.email}</span>
                </div>
                <div className={style['third-line-item']}>
                  <span>
                    {item.corrects}
                    %
                  </span>
                </div>
                <div className={style['fourth-line-item']}>
                  <button
                    onClick={() => handleOpenEditUser(item)}
                  >
                    <img src={editIcon} alt="editar" />
                  </button>
                  <button
                    onClick={() => setOpenModalDelete(item.id)}
                  >
                    <img src={deleteIcon} alt="deletar" />
                  </button>
                </div>
              </div>
            ))}
          <div className={style.paginator}>
            <ReactPaginate
              breakLabel="..."
              nextLabel={pageNumber + 1 === dataUsers.length ? '' : 'Próximo'}
              onPageChange={handlePageClick}
              previousLabel={dataUsers.length === 1 || pageNumber + 1 === 1 ? '' : 'Anterior'}
              pageRangeDisplayed={2}
              pageCount={pageCount}
              renderOnZeroPageCount={null}
              marginPagesDisplayed={1}
              containerClassName={style['container-class-name']}
              pageClassName={style['page-class-name']}
              pageLinkClassName={style['page-link-class-name']}
              activeLinkClassName={style['active-link-class-name']}
              previousClassName={style['previous-class-name']}
              nextClassName={style['next-class-name']}
              breakClassName={style['break-class-name']}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
