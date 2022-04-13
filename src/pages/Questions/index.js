import SearchQuestion from 'components/SearchQuestion';
import { useEffect, useState } from 'react';
import style from './styles.module.scss';
import pasteIcon from '../../assets/content-paste-icon.svg';
import editIcon from '../../assets/edit-icon.svg';
import deleteIcon from '../../assets/delete-icon.svg';
import api from '../../services/api';

export function Questions() {
  const [allQuestions, setAllQuestions] = useState([]);

  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjUzMTNmNTdhLTJiMzQtNDU0Yi04ZTJlLTEyOGQ2NDllNGJkOSIsImVtYWlsIjoibWFudUBlbWFpbC5jb20iLCJ1c2VyVHlwZSI6InN1cGVyIGFkbWluIiwiaWF0IjoxNjQ5ODUzMTUwLCJleHAiOjE2NDk5Mzk1NTB9.GsJlgvXfrvf1dirj4Hkm6jvhte-Pvqg8h8cPGlIRUOw';

  useEffect(() => {
    handleFilterQuestion();
  }, [allQuestions]);

  async function handleFilterQuestion() {
    try {
      const response = await api.get('/questions', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { data } = response;
      setAllQuestions(data.questions);
      console.log(allQuestions);
    } catch (error) {
      console.log(error);
    }
  }

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
        </div>
      </div>
    </main>
  );
}
