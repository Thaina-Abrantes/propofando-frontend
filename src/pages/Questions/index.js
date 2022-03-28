import SearchQuestion from 'components/SearchQuestion';
import style from './styles.module.scss';
import pasteIcon from '../../assets/content-paste-icon.svg';
import editIcon from '../../assets/edit-icon.svg';
import deleteIcon from '../../assets/delete-icon.svg';

export function Questions() {
  return (
    <main>
      <SearchQuestion />

      <div className={style.table}>
        <div className={style['table-header']}>
          <div className={style['name-title']}><span>Nome</span></div>
          <div className={style['manage-title']}><span>Gerenciar</span></div>
        </div>
        <div className={style['table-body']}>
          <div className={style['table-line']}>
            <div className={style['first-line-item']}>
              <img src={pasteIcon} alt="pasta" />
              <span>VUNESP - EsFCEx - Oficial Médico </span>
            </div>
            <div className={style['second-line-item']}>
              <button>
                <img src={editIcon} alt="editar" />
              </button>
              <button><img src={deleteIcon} alt="deletar" /></button>
            </div>
          </div>
          <div className={style['table-line']}>
            <div className={style['first-line-item']}>
              <img src={pasteIcon} alt="pasta" />
              <span>FUNDATEC - GHC - Médico </span>
            </div>
            <div className={style['second-line-item']}>
              <button>
                <img src={editIcon} alt="editar" />
              </button>
              <button><img src={deleteIcon} alt="deletar" /></button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
