import StudentHeader from 'components/StudentHeader';
import StudentPanel from 'components/StudentPanel';
import { Outlet } from 'react-router-dom';

import style from './styles.module.scss';

export function StudentMain() {
  return (
    <div className={style['container-main']}>
      <StudentHeader />
      <div className={style['div-wrapper']}>
        <StudentPanel />
        <div className={style['div-center']}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
