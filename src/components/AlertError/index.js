import { useState } from 'react';
import done from '../../assets/done-icon.svg';
import close from '../../assets/alert-error-close.svg';
import style from './styles.module.scss';

function AlertError({ message }) {
  const [showAlert, setShowAlert] = useState(true);

  return (
    <div>
      {showAlert
      && (

        <div className={style.container}>
          <div className={style.alertMessage}>
            <img src={done} alt="Erro" />
            <p>
              <strong>
                Erro!
              </strong>
              <span>{message}</span>
            </p>
          </div>
          <div
            className={style.close}
            onClick={() => setShowAlert(false)}
          >
            <img
              src={close}
              alt="close"
            />

          </div>
        </div>

      )}
    </div>
  );
}

export default AlertError;
