import SearchQuestion from 'components/SearchQuestion';
import { useEffect, useState } from 'react';
import { useStores } from 'stores';
import { useNavigate } from 'react-router-dom';
import Paginator from 'components/Paginator';
import style from './styles.module.scss';
import pasteIcon from '../../assets/content-paste-icon.svg';
import editIcon from '../../assets/edit-icon.svg';
import deleteIcon from '../../assets/delete-icon.svg';
import attachmentIcon from '../../assets/annex-icon.svg';

export function Questions() {
  const {
    userStore: {
      token,
    },
    modalStore: {
      openModalDeleteQuestion,
      setOpenModalDeleteQuestion,
    },
    questionStore: {
      handleListQuestions,
      listQuestions,
      setQuestionInEditing,
      currentPage,
      setCurrentPage,
      totalPages,
    },
  } = useStores();

  const navigate = useNavigate();
  const [serchQuestion, setSearchQuestion] = useState('');

  useEffect(async () => {
    await handleListQuestions(token);
  }, [currentPage, totalPages, openModalDeleteQuestion]);

  function handleOpenEditQuestion(item) {
    setQuestionInEditing(item);
    navigate('/main/add-question');
  }

  return (
    <main>
      <SearchQuestion setSearchQuestion={setSearchQuestion} />
      <div className={style.table}>
        <div className={style['table-header']}>
          <div className={style['name-title']}><span>Nome</span></div>
          <div className={style['attachment-title']}><span>Anexo</span></div>
          <div className={style['manage-title']}><span>Gerenciar</span></div>
        </div>
        <div className={style['table-body']}>
          {listQuestions && listQuestions.filter((item) => item.title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/gi, '')
            .includes(serchQuestion.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/gi, '')))
            .map((item) => (
              <div className={style['table-line']} key={item.id}>
                <div className={style['first-line-item']}>
                  <img src={pasteIcon} alt="pasta" />
                  <span>{item.title}</span>
                </div>
                <div className={style['second-line-item']}>
                  {item.image || item.explanationVideo ? <img src={attachmentIcon} alt="Clips" /> : null}
                </div>
                <div className={style['third-line-item']}>
                  <button
                    onClick={() => handleOpenEditQuestion(item)}
                  >
                    <img src={editIcon} alt="editar" />
                  </button>
                  <button
                    onClick={() => setOpenModalDeleteQuestion(item.id)}
                  >
                    <img src={deleteIcon} alt="deletar" />
                  </button>
                </div>
              </div>
            ))}
        </div>
        <Paginator setCurrentPage={setCurrentPage} totalPages={totalPages} />
      </div>
    </main>
  );
}
