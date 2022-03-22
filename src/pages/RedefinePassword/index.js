import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { newPasswordSchema } from 'validations/redefineValidation';
import style from './styles.module.scss';
import logo from '../../assets/logo-dark.svg';
import arrow from '../../assets/arrow-back-icon-white.svg';
import icon from '../../assets/confirmation-icon.svg';

export function RedefinePassword() {
  const navigate = useNavigate();
  const [resetSuccessfully, setResetSuccessfully] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [erroConfirmPassword, setErroConfirmPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [erroNewPassword, setErroNewPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      newPasswordSchema.validateSync({
        password: e.target[0].value,
        passwordConfirmation: e.target[1].value,
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

  function handleChangeInput1(value) {
    setNewPassword(value);
  }

  function handleChangeInput2(value) {
    setConfirmPassword(value);
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
            name="password"
            type="text"
            placeholder="Nova senha"
            onChange={(e) => { handleChangeInput1(e.target.value); }}
          />
          {erroNewPassword && <span className="error-message ">{erroNewPassword}</span>}
          <input
            className={erroConfirmPassword ? 'error-dark' : 'input'}
            name="password"
            type="text"
            placeholder="Confirmar senha"
            onChange={(e) => { handleChangeInput2(e.target.value); }}
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
