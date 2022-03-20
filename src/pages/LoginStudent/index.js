import { useState } from 'react';
import style from './styles.module.scss';
import logoDark from '../../assets/logo-dark.svg';
import vr from '../../assets/Foto_VR.png';
import openEye from '../../assets/visibility-icon.svg';
import closedEye from '../../assets/visibility-off-icon.svg';

export function LoginStudent() {
  const [open, setOpen] = useState(false);

  return (
    <div className={style.container}>
      <div className={style['container-left']}>
        <h1>
          O caminho
          {' '}
          <br />
          é o que torna
          {' '}
          <strong>possível</strong>
        </h1>
        <img src={vr} alt="VR" />
      </div>
      <div className={style['container-right']}>
        <div className={style['container-card']}>
          <img src={logoDark} alt="Logo Propofando" />
          <form>
            <h2>Faça seu login</h2>
            <div>
              <input className="input" placeholder="E-mail" />
            </div>
            <div className={style['password-input']}>
              <button
                type="button"
                onClick={() => setOpen(!open)}
              >
                <img src={open === false ? closedEye : openEye} alt="Visibiidade" />

              </button>
              <input className="input" placeholder="Senha" type={open === false ? 'password' : 'text'} />
            </div>
            <div className={style.btn}>
              <button className="button">Entrar</button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}
