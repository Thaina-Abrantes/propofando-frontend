import StudentHeader from 'components/StudentHeader';

import style from './styles.module.scss';

export function StudentMain() {
  return (
    <div className={style['container-main']}>
      <StudentHeader />

    </div>
  );
}
