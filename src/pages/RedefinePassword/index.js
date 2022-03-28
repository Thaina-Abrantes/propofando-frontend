import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { newPasswordSchema } from 'validations/redefineValidation';
import style from './styles.module.scss';
import logo from '../../assets/logo-dark.svg';
import arrow from '../../assets/arrow-back-icon-white.svg';
import icon from '../../assets/confirmation-icon.svg';

export function RedefinePassword() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ newPassword: '', confirmPassword: '' });

  const [resetSuccessfully, setResetSuccessfully] = useState(false);
  const [erroConfirmPassword, setErroConfirmPassword] = useState('');
  const [erroNewPassword, setErroNewPassword] = useState('');

  async function handleSubmit(e) {
    setErroNewPassword('');
    setErroConfirmPassword('');
    e.preventDefault();

    try {
      newPasswordSchema.validateSync({
        password: form.newPassword,
        passwordConfirmation: form.confirmPassword,
      });
    } catch (err) {
      if (err.params.path === 'password') {
        setErroNewPassword(err.message);
      }
      if (err.params.path === 'passwordConfirmation') {
        setErroConfirmPassword(err.message);
      }
    }
  }

  function handleChangeFormValue(e) {
    setErroNewPassword('');
    setErroConfirmPassword('');
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function loginBack() {
    return (
      navigate('/')
    );
  }

  return (
    <div className={style['container-main']}>
      <div className={style['container-imgs']}>
        <a className={style['arrow-img']} onClick={loginBack}>
          <img src={arrow} alt="Seta voltar" />
        </a>
        <img src={logo} alt="Logo" />
      </div>
      {!resetSuccessfully && (
        <form className={style['container-card']} onSubmit={handleSubmit}>
          <h1>Redefinir senha</h1>
          <p>
            Preencha os campos abaixo para definir uma
            <br />
            nova senha
          </p>
          <input
            className={erroNewPassword ? 'error-dark' : 'input'}
            name="newPassword"
            type="password"
            placeholder="Nova senha"
            value={form.newPassword}
            onChange={handleChangeFormValue}
          />
          {erroNewPassword && <span className="error-message ">{erroNewPassword}</span>}
          <input
            className={erroConfirmPassword ? 'error-dark' : 'input'}
            name="confirmPassword"
            type="password"
            placeholder="Confirmar senha"
            value={form.confirmPassword}
            onChange={handleChangeFormValue}
          />
          {erroConfirmPassword && <span className="error-message ">{erroConfirmPassword}</span>}
          <button className="button">
            Confirmar
          </button>
        </form>
      )}
      {resetSuccessfully && (
        <div className={style['container-successfully']}>
          <img className={style['icon']} src={icon} alt="Ícone de confirmação" />
          <h1>Senha redefinida com sucesso!</h1>
          <p>
            Use a nova senha cadastrada para realizar o
            <br />
            login na plataforma.
          </p>
          <button className="button" onClick={loginBack}>
            Voltar para login
          </button>
        </div>
      )}
    </div>
  );
}
