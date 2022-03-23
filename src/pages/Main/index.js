import Header from 'components/Header';
import ModalDelete from 'components/ModalDelete';

import style from './styles.module.scss';

export function Main() {
  return (
    <div className={style['container-main']}>
      <Header />
      <ModalDelete />
    </div>
  );
}
