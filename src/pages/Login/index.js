import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginSchema } from 'validations/loginValidation';
import { useStores } from '../../stores';
import LogoDark from '../../assets/logo-dark.svg';
import style from './styles.module.scss';

const defaultValues = { email: '', senha: '' };

export function Login() {
  const {
    userStore: {
      token,
    },
  } = useStores();

  function login() {
    if (token) {
      navigate('/main');
    }
  }
  const navigate = useNavigate();
  const [form, setForm] = useState(defaultValues);
  const [erroEmail, setErroEmail] = useState('');
  const [erroPassword, setErroPassword] = useState('');

  async function handleSubmit(event) {
    setErroEmail('');
    setErroPassword('');
    event.preventDefault();

    try {
      await loginSchema.validateSync({
        email: event.target[0].value,
        password: event.target[1].value,
      });
    } catch (err) {
      if (err.params.path === 'email') {
        setErroEmail(err.message);
        return;
      }
      if (err.params.path === 'password') {
        setErroPassword(err.message);
      }
    }
  }

  function handleChange(target) {
    setForm({ ...form, [target.name]: target.value });
  }

  return (
    <div className={style.container}>

      <div className={style.containerCard}>
        <img src={LogoDark} alt="Logo Propofando" />

        <form onSubmit={handleSubmit}>
          <h2>Faça seu Login</h2>
          <div className="containerInput">
            <input
              name="email"
              className={erroEmail ? 'error-dark' : 'input'}
              value={form.email}
              type="text"
              placeholder="email"
              onChange={(e) => { handleChange(e.target); }}
            />
            {erroEmail && <span className="error-message ">{erroEmail}</span>}
          </div>
          <div className="containerInput">
            <input
              name="senha"
              className={erroPassword ? 'error-dark' : 'input'}
              value={form.senha}
              placeholder="senha"
              type="password"
              onChange={(e) => { handleChange(e.target); }}
            />
            {erroPassword && <span className="error-message ">{erroPassword}</span>}
          </div>
          <div>
            <button
              onClick={login}
              className="button"

            >
              Entrar
            </button>
          </div>
        </form>
      </div>

    </div>
  );
}
