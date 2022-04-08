import { useState } from 'react';
import { loginSchema } from 'validations/loginValidation';
import { useNavigate } from 'react-router-dom';
import { useStores } from 'stores';
import { useForm } from 'react-hook-form';
import api from '../../services/api';
import style from './styles.module.scss';
import logoDark from '../../assets/logo-dark.svg';
import vr from '../../assets/Foto_VR.png';
import openEye from '../../assets/visibility-icon.svg';
import closedEye from '../../assets/visibility-off-icon.svg';

const defaultValuesForm = { email: '', password: '' };

export function LoginStudent() {
  const {
    userStore: {
      userData, setUserData, setToken, token,
    },
  } = useStores();

  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(defaultValuesForm);
  const [erroEmail, setErroEmail] = useState('');
  const [erroPassword, setErroPassword] = useState('');

  const { handleSubmit } = useForm();

  async function onSubmit() {
    setErroEmail('');
    setErroPassword('');

    const { email, password } = form;

    try {
      const body = { email, password };
      const result = await api.post('/login', body);

      console.log(result);
      if (result.status > 201) {
        throw `${result.request.response}`;
      }

      const { data: { token: tokenGenerated, user } } = result;

      setUserData(user);
      setToken(tokenGenerated);

      let redirectTo;

      if (user.userType === 'super admin') {
        redirectTo = '/main';
      } else if (user.userType === 'student') {
        redirectTo = '/student/main';
      }

      navigate(redirectTo);
    } catch (error) {
      const { request } = error;

      return 'Erro';
    }

    try {
      loginSchema.validateSync({
        email: form.email,
        password: form.password,
      });
    } catch (error) {
      if (error.params.path === 'email') {
        setErroEmail(error.message);
        return;
      }
      if (error.params.path === 'password') {
        setErroPassword(error.message);
      }
    }
  }

  function handleChange(event) {
    setErroEmail('');
    setErroPassword('');
    setForm({ ...form, [event.target.name]: event.target.value });
  }

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
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Faça seu login</h2>

            <div className="containerInput">
              <input
                className={erroEmail ? 'error-dark' : 'input'}
                placeholder="E-mail"
                name="email"
                value={form.email}
                onChange={(event) => handleChange(event)}
              />
              {erroEmail && <span>{erroEmail}</span>}
            </div>

            <div className={style['password-input']}>
              <button
                type="button"
                onClick={() => setOpen(!open)}
              >
                <img src={open === false ? closedEye : openEye} alt="Visibiidade" />
              </button>

              <input
                className={erroPassword ? 'error-dark' : 'input'}
                placeholder="Senha"
                name="password"
                value={form.password}
                type={open === false ? 'password' : 'text'}
                onChange={(event) => handleChange(event)}
              />
              <a href="/recovery">Esqueceu a senha? </a>
            </div>
            {erroPassword && <span className={style['error-message']}>{erroPassword}</span>}

            <div className={style.btn}>
              <button className="button" onClick={handleSubmit(onSubmit)}>Entrar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
