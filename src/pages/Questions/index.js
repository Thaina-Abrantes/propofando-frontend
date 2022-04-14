import SearchQuestion from 'components/SearchQuestion';
import { useEffect, useState, useRef } from 'react';
import { useStores } from 'stores';
import style from './styles.module.scss';
import pasteIcon from '../../assets/content-paste-icon.svg';
import editIcon from '../../assets/edit-icon.svg';
import deleteIcon from '../../assets/delete-icon.svg';
import api from '../../services/api';

export function Questions() {
  const [serchQuestion, setSearchQuestion] = useState('');
  const [allQuestions, setAllQuestions] = useState([]);
  const componentMounted = useRef(true);

  const {
    modalStore: {
      openModalDeleteQuestion,
      setOpenModalDeleteQuestion,
    },
  } = useStores();

  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjUzMTNmNTdhLTJiMzQtNDU0Yi04ZTJlLTEyOGQ2NDllNGJkOSIsImVtYWlsIjoibWFudUBlbWFpbC5jb20iLCJ1c2VyVHlwZSI6InN1cGVyIGFkbWluIiwiaWF0IjoxNjQ5OTM4NDgyLCJleHAiOjE2NTAwMjQ4ODJ9.u1xnXv7jnezzXa1EuIztgdZXE5SB9j4By4mNraJ3lFY';

  useEffect(() => {
    handleFilterQuestion();
  }, []);

  async function handleFilterQuestion() {
    try {
      const response = await api.get('/questions', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (componentMounted.current) {
        const { data } = response;
        setAllQuestions(data.questions);
      }
      return () => {
        componentMounted.current = false;
      };
    } catch (error) {
      console.log(error);
    }
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
          {allQuestions.filter((item) => item.title.toLocaleLowerCase()
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
                  <button>
                    <img src={editIcon} alt="editar" />
                  </button>
                  <button onClick={() => setOpenModalDeleteQuestion(item.id)}><img src={deleteIcon} alt="deletar" /></button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
}
