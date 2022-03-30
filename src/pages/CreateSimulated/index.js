import StudentHeader from 'components/StudentHeader';
import { useNavigate } from 'react-router-dom';
import style from './styles.module.scss';
import arrow from '../../assets/arrow-back-icon.svg';

export function CreateSimulated() {
  const navigate = useNavigate();

  return (
    <div className={style['container-page']}>
      <StudentHeader />

      <form className={style['container-create']}>
        <div className={style['container-title']}>
          <div className={style['img-back']} onClick={() => navigate('/studentmain')}>
            <img src={arrow} alt="Seta voltar" />
          </div>
          <h1>Criar simulado</h1>
        </div>
        <div className={style['border']}>
          <div className={style['container-row']}>
            <div className={style['container-personalize']}>
              <h1>Personalizar</h1>
              <div className={style['row']}>
                <label>Nome do Simulado</label>
                <span>(Opcional)</span>
              </div>
              <input className="input" placeholder="Input text" />
            </div>
            <div className={style['container-amount']}>
              <div className={style['row']}>
                <label>Insira a Quantidade de Questões</label>
                <span>(Opcional)</span>
              </div>
              <select className={style['select']}>
                <option value="amount1">5 questões</option>
                <option value="amount2" selected>10 questões</option>
                <option value="amount3">15 questões</option>
              </select>
            </div>
          </div>
        </div>

        <div className={style['container-filter']}>
          <h1>Filtros</h1>
          <label>Filtrar por categoria</label>
          <select name="select" className={style['select']}>
            <option value="category1">Categoria A</option>
            <option value="category2" selected>Categoria B</option>
            <option value="category3">Categoria C</option>
          </select>
        </div>
        <button className="button">Criar simulado</button>
      </form>
    </div>
  );
}
