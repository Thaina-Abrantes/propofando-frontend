import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import style from './styles.module.scss';
import arrow from '../../assets/arrow-back-icon.svg';
import arrowDown from '../../assets/arrow-down.svg';
import arrowUp from '../../assets/arrow-up.svg';

export function CreateTest() {
  const navigate = useNavigate();
  const [openSelect, setOpenSelect] = useState(false);

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
            <div className={style.select} onClick={() => setOpenSelect(true)}>
              <select name="select">
                <option value="" selected disabled>Selecionar</option>
                <option value="category1">Categoria A</option>
                <option value="category2">Categoria B</option>
                <option value="category3">Categoria C</option>
              </select>
              <img src={openSelect ? arrowUp : arrowDown} alt="Seta" />
            </div>
          </div>

          <button className="button" onClick={() => navigate('/test')}>Criar simulado</button>
        </form>
      </div>
    </main>
  );
}
