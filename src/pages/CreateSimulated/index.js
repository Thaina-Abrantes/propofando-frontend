import style from './styles.module.scss';
import arrow from '../../assets/arrow-back-icon.svg';

export function CreateSimulated() {
  return (
    <form className={style['container-create']}>
      <div className={style['container-title']}>
        <img src={arrow} alt="Seta voltar" />
        <h1>Criar simulado</h1>
      </div>
      <div className={style['container-row']}>
        <div className={style['container-column']}>
          <div className={style['container-infos']}>
            <h1>Personalizar</h1>
            <div className={style['row']}>
              <label>Nome do Simulado</label>
              <span>(Opcional)</span>
            </div>
            <input className="input" placeholder="Input text" />
          </div>
          <div className={style['container-infos']}>
            <h1>Filtros</h1>
            <label>Filtrar por categoria</label>
            <select name="select" placeholder="Selecionar">
              <option value="category1">Category 1</option>
              <option value="category2" selected>Category  2</option>
              <option value="category3">Category  3</option>
            </select>
          </div>
        </div>
        <div className={style['container-amount']}>
          <div className={style['row']}>
            <label>Insira a Quantidade de Questões</label>
            <span>(Opcional)</span>
          </div>
          <select name="select">
            <option value="amount1">Amount 1</option>
            <option value="amount2" selected>Amount  2</option>
            <option value="amount3">Amount 3</option>
          </select>
        </div>
      </div>
      <button className="button">Criar simulado</button>
    </form>
  );
}
