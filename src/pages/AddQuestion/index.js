import { useNavigate } from 'react-router-dom';
import style from './styles.module.scss';
import arrowBack from '../../assets/arrow-back-icon.svg';

export function AddQuestion() {
  const navigate = useNavigate();

  return (
    <main className={style.container}>
      <div className={style['page-header']}>
        <div className={style['header-back']}>
          <button
            onClick={() => navigate('/main/questioncategory')}
          >
            <img src={arrowBack} alt="Voltar" />

          </button>
          <h2>Categorias e questões</h2>
        </div>
        <div>
          <span>Categorias e questões / Adicionar questão</span>
        </div>
      </div>

      <div className={style['page-body']}>
        <h2>Criar questão</h2>

        <form>
          <div className={style['div-title-category']}>
            <div>
              <label>
                Título
                <textarea maxLength={200} />
              </label>
              <span>200/200</span>
            </div>
            {/* aqui vai o input do tipo select */}
          </div>
        </form>
      </div>

    </main>
  );
}
