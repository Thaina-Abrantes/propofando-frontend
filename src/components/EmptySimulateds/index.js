import { useNavigate } from 'react-router-dom';
import style from './styles.module.scss';
import empty from '../../assets/empty.svg';

function EmptySimulateds() {
  const navigate = useNavigate();

  return (
    <div className={style.container}>
      <img src={empty} alt="Imagem de uma folha representando que não há simulados feitos" />
      <h2>
        Você ainda não finalizou nenhum simulado
      </h2>
      <p>
        Assim que você finalizar um simulado, ele aparecerá aqui
      </p>
      <button
        className="button"
        onClick={() => navigate('/student/main/create-test')}
      >
        Criar simulado

      </button>

    </div>
  );
}

export default EmptySimulateds;
