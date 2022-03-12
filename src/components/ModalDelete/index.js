import style from './styles.module.scss';
import clear from '../../assets/clear-icon.svg';

function ModalDelete({ title }) {
  return (
    <div className={style.container}>
      <img src={clear} alt="Close" />
      <div>
        <h2>
          Excluir
          {' '}
          {title}
        </h2>
        <p>
          Tem certeza que deseja excluir esse
          {' '}
          {title}
          ? Essa ação não poderá ser desfeita.
        </p>
        <button className="button">Excluir</button>
      </div>
    </div>
  );
}

export default ModalDelete;
