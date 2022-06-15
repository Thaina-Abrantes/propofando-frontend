import { useEffect, useState } from 'react';
import { useStores } from 'stores';
import clear from '../../assets/clear-icon.svg';
import style from './styles.module.scss';

const defultValuesModal = { name: '', email: '', password: '' };
function ModalEdit() {
  const [form, setForm] = useState(defultValuesModal);

  const {
    modalStore: {
      openModalEdit,
      setOpenModalEdit,
    },
    userStore: {
      token,
    },
    studentAdminStore: {
      handleEditUser,
      userInEditing,
      setUserInEditing,
      errorUser,
    },
    utilsStore: { setAlert },
  } = useStores();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  let formValues = {};
  useEffect(() => {
    if (openModalEdit && userInEditing) {
      if (form.password) {
        formValues = {
          name: userInEditing.name,
          email: userInEditing.email,
          password: form.password,
        };
      } else {
        formValues = {
          name: userInEditing.name,
          email: userInEditing.email,
        };
      }

      setForm(formValues);
    }
  }, [userInEditing, openModalEdit]);

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await handleEditUser(form, token);
    if (response.status > 204) {
      setAlert({ open: true, type: 'error', message: response.data.message });
      return;
    }
    setAlert({ open: true, type: 'success', message: response.data.message });
    setUserInEditing('');
    setOpenModalEdit(false);
  }

  return (
    <div className={style['background-modal']}>
      <div className={style.container}>
        <div className={style['btn-close']}>
          <button
            onClick={() => setOpenModalEdit(false)}
          >
            <img src={clear} alt="close" />
          </button>
        </div>
        <h2>Editar dados</h2>

        <form onSubmit={handleSubmit}>
          <div className={style.wrapInputs}>
            <div className={style.containerInputs}>
              <label>Nome</label>
              <input
                className="input-light"
                placeholder="Nome"
                name="name"
                value={form.name}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className={style.containerInputs}>
              <label>Email</label>
              <input
                className="input-light"
                placeholder="Email"
                name="email"
                value={form.email}
                onChange={(e) => handleChange(e)}
              />
              {errorUser && <span>{errorUser}</span>}
            </div>
          </div>
          <div className={style.wrapInputBtn}>
            <div className={style.containerInputs}>
              <label>Senha</label>
              <input
                className="input-light"
                placeholder="Senha"
                type="password"
                name="password"
                value={form.password || ''}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <button className="button">Salvar alterações</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalEdit;
