import SearchQuestion from 'components/SearchQuestion';
import { useEffect, useState } from 'react';
import { useStores } from 'stores';
import { useNavigate } from 'react-router-dom';
import style from './styles.module.scss';
import pasteIcon from '../../assets/content-paste-icon.svg';
import editIcon from '../../assets/edit-icon.svg';
import deleteIcon from '../../assets/delete-icon.svg';

export function Questions() {
  const navigate = useNavigate();
  const [serchQuestion, setSearchQuestion] = useState('');

  const {
    modalStore: {
      openModalDeleteQuestion,
      setOpenModalDeleteQuestion,
    },
    questionStore: {
      handleListQuestions,
      listQuestions,
      questionInEditing,
      setQuestionInEditing,
    },
  } = useStores();

  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjUzMTNmNTdhLTJiMzQtNDU0Yi04ZTJlLTEyOGQ2NDllNGJkOSIsImVtYWlsIjoibWFudUBlbWFpbC5jb20iLCJ1c2VyVHlwZSI6InN1cGVyIGFkbWluIiwiaWF0IjoxNjUwNTQyNzg3LCJleHAiOjE2NTA2MjkxODd9.IyroQR1tRt5MgIkchu3d0kuX0byZDbVv_msXQMQvMGw';

  useEffect(() => {
    handleListQuestions();
  }, [listQuestions, openModalDeleteQuestion]);

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
          <div className={style['manage-title']}><span>Gerenciar</span></div>
        </div>
        <div className={style['table-body']}>
          {listQuestions.filter((item) => item.title.toLocaleLowerCase()
            .replace(/[áàãäâ]/, 'a')
            .replace(/[éèëê]/, 'e')
            .replace(/[íìïî]/, 'i')
            .replace(/[óòõöô]/, 'o')
            .replace(/[úùüû]/, 'u')
            .includes(serchQuestion.toLocaleLowerCase()))
            .map((item) => (
              <div className={style['table-line']} key={item.id}>
                <div className={style['first-line-item']}>
                  <img src={pasteIcon} alt="pasta" />
                  <span>{item.title}</span>
                </div>
                <div className={style['second-line-item']}>
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
      </div>
    </main>
  );
}
