import Header from 'components/Header';
import TextArea from 'components/TextArea';
// import Modal from 'components/Modal';
// import ModalDelete from 'components/ModalDelete';
// import ModalEndTest from 'components/ModalEndTest';
import style from './styles.module.scss';

export function Main() {
  return (
    <div className={style['container-main']}>
      <Header />
      {/* <Modal title="Editar Dados" button="Salvar alterações" /> */}
      {/* <ModalDelete title="categoria" />
      <ModalEndTest /> */}
      <TextArea />
      <h1>Hello World</h1>
      <h1>Footer</h1>
    </div>
  );
}
