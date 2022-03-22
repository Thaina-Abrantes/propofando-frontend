import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './styles.module.scss';
import logo from '../../assets/logo-dark.svg';
import arrow from '../../assets/arrow-back-icon-white.svg';
import icon from '../../assets/confirmation-icon.svg';

export function RedefinePassword() {
  const navigate = useNavigate();
  const [resetSuccessfully, setResetSuccessfully] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setResetSuccessfully(true);
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
          className="input"
          name="password"
          type="text"
          placeholder="Nova senha"
        />
        <input
          className="input"
          name="password"
          type="text"
          placeholder="Confirmar senha"
        />
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
