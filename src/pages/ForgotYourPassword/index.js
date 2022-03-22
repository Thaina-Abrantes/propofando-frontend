/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable max-len */
import { useState } from 'react';
import { redefineSchema } from 'validations/redefineValidation';
import { useNavigate } from 'react-router-dom';
import style from './styles.module.scss';
import logo from '../../assets/logo-dark.svg';
import arrow from '../../assets/arrow-back-icon-white.svg';

export function ForgotYourPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [erroEmail, setErroEmail] = useState('');

  async function handleSubmit(e) {
    setErroEmail('');
    e.preventDefault();

    try {
      redefineSchema.validateSync({
        email: e.target[0].value,
      });
    } catch (err) {
      if (err.params.path === 'email') {
        setErroEmail(err.message);
      }
    }
  }
  function handleChange(value) {
    setEmail(value);
  }

  function loginBack() {
    return (
      navigate('/')
    );
  }

  const body = {
    email,
  };

  return (
    <div className={style['container-main']}>
      <div className={style['container-imgs']}>
        <a className={style['arrow-img']} onClick={loginBack}>
          <img src={arrow} alt="Seta voltar" />
        </a>
        <img src={logo} alt="Logo" />
      </div>
      <form className={style['container-card']} onSubmit={handleSubmit}>
        <h1>Esqueceu sua senha?</h1>
        <p>
          Digite o endereço de e-mail associado à sua
          <br />
          conta e enviaremos um link para redefinir sua
          <br />
          senha.
        </p>
        <div className={style['input-error']}>
          <input
            className={erroEmail ? 'error-dark' : 'input'}
            name="email"
            value={email}
            type="text"
            placeholder="Email"
            onChange={(e) => { handleChange(e.target.value); }}
          />
          {erroEmail && <span className="error-message">{erroEmail}</span>}
        </div>
        <button className="button">
          Enviar
        </button>
      </form>
    </div>
  );
}
