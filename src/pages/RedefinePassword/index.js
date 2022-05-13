import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { newPasswordSchema } from 'validations/redefineValidation';
import { useStores } from 'stores';
import { useForm } from 'react-hook-form';
import api from '../../services/api';
import style from './styles.module.scss';
import logo from '../../assets/logo-dark.svg';
import arrow from '../../assets/arrow-back-icon-white.svg';
import icon from '../../assets/confirmation-icon.svg';

export function RedefinePassword() {
  const { utilsStore: { setAlert } } = useStores();

  const navigate = useNavigate();
  const [form, setForm] = useState({ newPassword: '', confirmPassword: '' });

  const [resetSuccessfully, setResetSuccessfully] = useState(false);
  const [erroConfirmPassword, setErroConfirmPassword] = useState('');
  const [erroNewPassword, setErroNewPassword] = useState('');

  const { handleSubmit } = useForm();

  const { token } = useParams();

  async function onSubmit() {
    setErroNewPassword('');
    setErroConfirmPassword('');

    const { newPassword: password, confirmPassword: passwordConfirmation } = form;

    try {
      newPasswordSchema.validateSync({
        password,
        passwordConfirmation,
      });

      const body = { password, passwordConfirmation };

      const result = await api.post(`/users/redefine-password/${token}`, body);

      const { data } = result;

      if (result.status > 204) {
        setAlert({ open: true, type: 'error', message: data?.message || data });
        return;
      }
      setResetSuccessfully(true);
    } catch (err) {
      if (err?.params?.path === 'password') {
        setErroNewPassword(err?.message);
      }
      if (err?.params?.path === 'passwordConfirmation') {
        setErroConfirmPassword(err?.message);
      }
    }
  }

  function handleChangeFormValue(e) {
    setErroNewPassword('');
    setErroConfirmPassword('');
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <div className={style['container-main']}>
      <div className={style['container-imgs']}>
        <a className={style['arrow-img']} onClick={() => navigate('/login')}>
          <img src={arrow} alt="Seta voltar" />
        </a>
        <img src={logo} alt="Logo" />
      </div>
      {!resetSuccessfully && (
        <form className={style['container-card']} onSubmit={handleSubmit(onSubmit)}>
          <h1>Redefinir senha</h1>
          <p>
            Preencha os campos abaixo para definir uma
            <br />
            nova senha
          </p>
          <div className={style['input-label']}>
            <label>A senha deve conter no mínimo 8 caracteres.</label>
            <input
              className={erroNewPassword ? 'error-dark' : 'input'}
              name="newPassword"
              type="password"
              placeholder="Nova senha"
              value={form.newPassword}
              onChange={handleChangeFormValue}
            />
          </div>
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
          <button className="button" onClick={handleSubmit(onSubmit)}>
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
          <button className="button" onClick={() => navigate('/login')}>
            Voltar para login
          </button>
        </div>
      )}
    </div>
  );
}
