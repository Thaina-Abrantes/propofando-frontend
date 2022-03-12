import Header from 'components/Header';
import Modal from 'components/Modal';
import style from './styles.module.scss';

export function Main() {
  return (
    <div className={style['container-main']}>
      <Header />
      <Modal title="Editar Dados" button="Salvar alterações" />
      <h1>Hello World</h1>
      <h1>Footer</h1>
    </div>
  );
}
