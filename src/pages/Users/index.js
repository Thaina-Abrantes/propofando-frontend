import { useStores } from 'stores';
import Search from 'components/Search';
import style from './styles.module.scss';
import userIcon from '../../assets/identity-icon.svg';
import editIcon from '../../assets/edit-icon.svg';
import deleteIcon from '../../assets/delete-icon.svg';

export function Users() {
  const {
    modalStore: {
      openModalEdit,
      setOpenModalEdit,
      openModalDelete,
      setOpenModalDelete,
    },
  } = useStores();
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
          <div className={style['table-line']}>
            <div className={style['first-line-item']}>
              <img src={userIcon} alt="Icone de usuário" />
              <span>Ísis Nunes Martins Santos </span>
            </div>
            <div className={style['second-line-item']}>
              <span>nunesisis_m@myemail.com</span>
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
                onClick={() => setOpenModalDelete(true)}
              >
                <img src={deleteIcon} alt="deletar" />

              </button>
            </div>
          </div>

          <div className={style['table-line']}>
            <div className={style['first-line-item']}>
              <img src={userIcon} alt="Icone de usuário" />
              <span>Murilo Almeida Fernandes</span>
            </div>
            <div className={style['second-line-item']}>
              <span>mu_almeidafrnds@mysemail.com</span>
            </div>
            <div className={style['third-line-item']}>
              <span>77%</span>
            </div>
            <div className={style['fourth-line-item']}>
              <button
                onClick={() => setOpenModalEdit(true)}
              >
                <img src={editIcon} alt="editar" />
              </button>
              <button
                onClick={() => setOpenModalDelete(true)}
              >
                <img src={deleteIcon} alt="deletar" />

              </button>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
