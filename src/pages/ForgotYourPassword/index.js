/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable max-len */
import { useState } from 'react';
import { emailSchema } from 'validations/redefineValidation';
import { useNavigate } from 'react-router-dom';
import { useStores } from 'stores';
import { useForm } from 'react-hook-form';
import api from '../../services/api';
import style from './styles.module.scss';
import logo from '../../assets/logo-dark.svg';
import arrow from '../../assets/arrow-back-icon-white.svg';

export function ForgotYourPassword() {
  const { utilsStore: { setAlert } } = useStores();

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [erroEmail, setErroEmail] = useState('');

  const { handleSubmit } = useForm();

  async function onSubmit(e) {
    setErroEmail('');

    try {
      emailSchema.validateSync({
        email,
      });

      const body = { email };
      const result = await api.post('/users/recovery-password', body);

      const { data } = result;

      if (result.status > 204) {
        setAlert({ open: true, type: 'error', message: data?.message || data });
        return;
      }

      setAlert({ open: true, type: 'success', message: data?.message || data });
    } catch (err) {
      if (err?.params?.path === 'email') {
        setErroEmail(err.message);
      }

      const { request: { response } } = err;

      setAlert({ open: true, type: 'error', message: response?.message || response });
    }
  }

  function handleChange(value) {
    setEmail(value);
  }

  return (
    <div className={style['container-main']}>
      <div className={style['container-imgs']}>
        <a className={style['arrow-img']} onClick={() => navigate('/login')}>
          <img src={arrow} alt="Seta voltar" />
        </a>
        <img src={logo} alt="Logo" />
      </div>
      <form className={style['container-card']} onSubmit={handleSubmit(onSubmit)}>
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
        <button className="button" onClick={handleSubmit(onSubmit)}>
          Enviar
        </button>
      </form>
    </div>
  );
}
