import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { InputDropdown } from 'components/InputDropdown';
import { useUser } from '../../stores/userStore';
import style from './styles.module.scss';
import arrow from '../../assets/arrow-back-icon.svg';
import arrowDown from '../../assets/arrow-down.svg';
import arrowUp from '../../assets/arrow-up.svg';
import api from '../../services/api';

export function CreateTest() {
  const { token } = useUser();

  const navigate = useNavigate();
  const [categorysList, setCategorysList] = useState([]);
  const [errorCategorysList, setErrorCategorysList] = useState('');

  useEffect(() => {
    handleListNamesCategorys();
  }, []);

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

  return (
    <main className={style['container-create']}>
      <div className={style['container-title']}>
        <div className={style['img-back']}>
          <img src={arrow} alt="Seta voltar" />
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
                    <span>(Opcional)</span>
                  </div>
                  <input className="input" placeholder="Input text" />
                </div>
                <div className={style['container-input']}>
                  <div className={style.row}>
                    <label>Insira a Quantidade de Questões</label>
                    <span>(Opcional)</span>
                  </div>
                  <input className="input" type="number" placeholder="Quantidade" size="3" max="3" />
                </div>
              </div>
            </div>
          </div>

          <div className={style['container-filter']}>
            <h1>Filtros</h1>
            <label>Filtrar por categoria</label>
            <InputDropdown
              list={categorysList}
            />
          </div>

          <button className="button" onClick={() => navigate('/test')}>Criar simulado</button>
        </form>
      </div>
    </main>
  );
}
