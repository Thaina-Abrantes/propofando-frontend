import { useStores } from 'stores';
import Search from 'components/Search';
import { useEffect, useState } from 'react';
import PaginatorUsers from 'components/PaginatorUsers';
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
    },
  } = useStores();
  const navigate = useNavigate();
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
      const response = await api.get(`/users/paginated?page=${currentPage}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { data } = response;
      setDataUsers(data.users);
      setTotalPage(data.totalPages);
    } catch (error) {
      return error;
    }
  }

  const handleOpenUser = (item) => {
    setOpenUserStatistics(item);
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
          <PaginatorUsers />
        </div>
      </div>
    </main>
  );
}
