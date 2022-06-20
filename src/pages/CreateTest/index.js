import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import { InputDropdown } from 'components/InputDropdown';
import { useStores } from 'stores';
import { useUser } from '../../stores/userStore';
import style from './styles.module.scss';
import arrow from '../../assets/arrow-back-icon.svg';
import api from '../../services/api';

const defultValuesModal = { name: '', quantity: 0 };
export function CreateTest() {
  const {
    simulatedStore: { handleCreateUserSimulated },
    userStore: {
      userData,
      token,
    },
    utilsStore: { setAlert },
  } = useStores();

  const navigate = useNavigate();
  const [categorysList, setCategorysList] = useState([]);
  const [errorCategorysList, setErrorCategorysList] = useState('');
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState(defultValuesModal);

  useEffect(() => {
    handleListNamesCategorys();
  }, [token]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleListNamesCategorys() {
    try {
      const response = await api.get('/categories', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { data } = response;
      setCategorysList(data);
      return;
    } catch (error) {
      const currentError = error.response.data.message || error.response.data;
      setErrorCategorysList(currentError);
      return error.response;
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await handleCreateUserSimulated(form, userData.id, categories, token);

    if (response.status >= 204) {
      setAlert({ open: true, type: 'error', message: response.data.message || response.data });
      return;
    }
    setAlert({ open: true, type: 'success', message: 'Simulado criado com sucesso!' });
    navigate('/test');
  };

  return (
    <main className={style['container-create']}>
      <div className={style['container-title']}>
        <div className={style['img-back']}>
          <button onClick={() => navigate('/student/main')}>
            <img src={arrow} alt="Seta voltar" />
          </button>
        </div>
        <h1>Criar simulado</h1>
      </div>
      <div className={style.container}>
        <form>
          <div className={style.border}>
            <div className={style['container-custom']}>
              <h1>Personalizar</h1>
              <div className={style['content-custom']}>
                <div className={style['container-input']}>
                  <div className={style.row}>
                    <label>Nome do Simulado</label>
                  </div>
                  <input
                    className="input"
                    placeholder="Input text"
                    name="name"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className={style['container-input']}>
                  <div className={style.row}>
                    <label>Insira a Quantidade de Questões</label>
                  </div>
                  <input
                    className="input"
                    type="number"
                    name="quantity"
                    placeholder="Quantidade"
                    size="3"
                    min={0}
                    maxLength="3"
                    onChange={(e) => handleChange(e)}

                  />
                </div>
              </div>
            </div>
          </div>

          <div className={style['container-filter']}>
            <h1>Filtros</h1>
            <label>Filtrar por categoria</label>
            <InputDropdown
              list={categorysList}
              categoriesIds={categories}
              setCategoriesIds={setCategories}
            />
          </div>

          <button className="button" onClick={(e) => handleSubmit(e)}>Criar simulado</button>
        </form>
      </div>
    </main>
  );
}
