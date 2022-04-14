import { useStores } from 'stores';
import Search from 'components/Search';
import { useEffect, useState } from 'react';
import style from './styles.module.scss';
import userIcon from '../../assets/identity-icon.svg';
import editIcon from '../../assets/edit-icon.svg';
import deleteIcon from '../../assets/delete-icon.svg';
import api from '../../services/api';

export function Users() {
  const [dataUsers, setDataUsers] = useState([]);
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
  } = useStores();

  useEffect(() => {
    handleListUsers();
  }, [openModalRegisterUser, openModalDelete, openModalEdit]);

  async function handleListUsers() {
    try {
      const response = await api.get('/users', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { data } = response;
      setDataUsers(data);
    } catch (error) {
      return error;
    }
  }
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
          {dataUsers.map((item) => (
            <div className={style['table-line']} key={item.id}>
              <div className={style['first-line-item']}>
                <img src={userIcon} alt="Icone de usuário" />
                <span>{item.name}</span>
              </div>
              <div className={style['second-line-item']}>
                <span>{item.email}</span>
              </div>
              <div className={style['third-line-item']}>
                <span>86%</span>
              </div>
              <div className={style['fourth-line-item']}>
                <button
                  onClick={() => setOpenModalEdit(true)}
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

        </div>
      </div>
    </main>
  );
}
