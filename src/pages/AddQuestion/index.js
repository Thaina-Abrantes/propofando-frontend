/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-expressions */
import { useState, useEffect } from 'react';
import { useStores } from 'stores';
import { useNavigate } from 'react-router-dom';
import InputAlternative from 'components/InputAlternative';
import { caracterTextArea } from 'utils/caracterTextArea';
import Upload from 'components/Upload';
import api from '../../services/api';
import clip from '../../assets/annex-icon.svg';
import arrowBack from '../../assets/arrow-back-icon.svg';
import arrowDown from '../../assets/arrow.svg';
import style from './styles.module.scss';

const defaultValuesForm = {
  title: '',
  description: '',
  explanationText: '',
};

const defaultAlternatives = [
  {
    option: 'A)',
    description: '',
  },
  {
    option: 'B)',
    description: '',
  },
  {
    option: 'C)',
    description: '',
  },
  {
    option: 'D)',
    description: '',
  },
];

export function AddQuestion() {
  const {
    userStore: { token },
    questionStore: {
      handleRegisterQuestion,
      handleEditQuestion,
      setErrorQuestion,
      questionInEditing,
      setQuestionInEditing,
      setCategoryQuestions,
    },
    utilsStore: { setAlert },
    modalStore: {
      openModalDeleteQuestion,
      setOpenModalDeleteQuestion,
    },
  } = useStores();

  const navigate = useNavigate();

  const [form, setForm] = useState(questionInEditing || defaultValuesForm);
  const [alternatives, setAlternatives] = useState(
    questionInEditing.alternatives || defaultAlternatives,
  );

  const [categoryId, setCategoryId] = useState(questionInEditing.categoryId || '');
  const [dataCategory, setDataCategory] = useState([]);

  const [openUploadDescription, setOpenUploadDescription] = useState(false);
  const [openUploadExplanation, setOpenUploadExplanation] = useState(false);
  const [imgMedia, setImgMedia] = useState(false);
  const [videoMedia, setVideoMedia] = useState(false);

  const titleSize = 200 - (form.title.split('').length);

  function handleChange(target) {
    setForm({ ...form, [target.name]: target.value });
  }

  function handleCategoryId(e) {
    setCategoryId(e.target.value);
  }

  async function handleListCategory() {
    try {
      const response = await api.get('/categories/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { data } = response;

      setDataCategory(data);
      return;
    } catch (error) {
      return error;
    }
  }

  const onInputChange = ({ name, value }, position) => {
    const clonedAlternatives = [...alternatives];
    clonedAlternatives.splice(position, 1, {
      ...alternatives[position],
      [name]: value,
    });
    setAlternatives(clonedAlternatives);
  };

  async function handleSubmit(e) {
    e.preventDefault();

    const options = document.getElementsByName('option');

    for (let i = 0; i < options.length; i += 1) {
      if (options[i].checked) {
        alternatives[i].correct = true;
      } else {
        alternatives[i].correct = false;
      }
    }

    if (!questionInEditing) {
      const response = await handleRegisterQuestion({ form, alternatives, categoryId });
      if (response.status > 204) {
        setAlert({ open: true, type: 'error', message: response.data.message || response.data });
        return;
      }

      navigate('/main/list-question');
      setAlert({ open: true, type: 'success', message: response.data.message });

      const currentCategory = dataCategory.find((categ) => categ.id === categoryId);

      setCategoryQuestions(currentCategory);

      setErrorQuestion('');
    } else if (questionInEditing && !openModalDeleteQuestion) {
      const responseEdit = await handleEditQuestion({ form, alternatives, categoryId });
      if (responseEdit.status > 204) {
        setAlert({ open: true, type: 'error', message: responseEdit.data.message || responseEdit.data });
        return;
      }

      navigate('/main/list-question');
      setAlert({ open: true, type: 'success', message: responseEdit.data.message });
      setQuestionInEditing(false);
    }
  }

  useEffect(async () => {
    await handleListCategory();
  }, []);

  useEffect(() => {
    if (!questionInEditing) {
      setForm(defaultValuesForm);
      setAlternatives(defaultAlternatives);
      setCategoryId('selecione');
    }
  }, [questionInEditing]);

  return (
    <main className={style.container}>
      <div className={style['page-header']}>
        <div className={style['header-back']}>
          <button
            onClick={() => navigate('/main/question-category')}
          >
            <img src={arrowBack} alt="Voltar" />

          </button>
          <h2>Categorias e questões</h2>
        </div>
        <div>
          <span>
            Categorias e questões /
            {' '}
            {(questionInEditing && 'Editar questão') || 'Adicionar questão'}
          </span>
        </div>
      </div>

      <div className={style['page-body']}>
        <h2>{(questionInEditing && 'Editar questão') || 'Criar questão'}</h2>

        <form onSubmit={handleSubmit}>
          <div className={style['div-title-category']}>
            <div>
              <label>
                Título
                <textarea
                  value={form.title}
                  name="title"
                  maxLength={200}
                  onChange={(e) => handleChange(e.target)}
                />
              </label>
              <span>
                {form.title === '' ? 200 : titleSize}
                /200
              </span>
            </div>
            <div className="input-select-ligth">
              <label>
                Categoria
                <select
                  value={categoryId || 'selecione'}
                  onChange={(e) => handleCategoryId(e)}
                >
                  <option value="selecione">
                    Selecione
                  </option>
                  {dataCategory?.map((data) => (
                    <option
                      key={data.id}
                      value={data.id}
                    >
                      {data.name}
                    </option>
                  ))}
                </select>
              </label>
              <img src={arrowDown} alt="seta" />
            </div>
          </div>
          <div className={style['div-body-questions']}>
            <div className={style['question']}>
              <label>
                Descrição da questão
                <textarea
                  name="description"
                  value={form.description}
                  maxLength={1620}
                  onChange={(e) => handleChange(e.target)}

                />
              </label>
              <div onClick={() => setOpenUploadDescription(true)}>
                <Upload
                  open={openUploadDescription}
                  setOpen={setOpenUploadDescription}
                  handleReturnUrl={(url) => setForm({ ...form, image: url })}
                  setImgMedia={setImgMedia}
                  openUploadDescription={openUploadDescription}
                />
                <img src={clip} alt="clip" />
                {imgMedia
                  ? <span>{imgMedia}</span>
                  : <span>Anexar mídia</span>}
              </div>
              <span className={style['counter-span']}>
                {form.description === '' ? 1620 : caracterTextArea(form.description)}
                /1620
              </span>
            </div>
          </div>

          <h3>Alternativas</h3>
          {alternatives.map((alternative, index) => (
            <InputAlternative
              key={index}
              alternative={alternative}
              onInputChange={onInputChange}
              position={index}
            />
          ))}

          <div className={style['question']}>
            <label>
              Adicionar explicação
              <textarea
                name="explanationText"
                value={form.explanationText}
                maxLength={1620}
                onChange={(e) => handleChange(e.target)}
              />
            </label>
            <div onClick={() => setOpenUploadExplanation(true)}>
              <Upload
                open={openUploadExplanation}
                setOpen={setOpenUploadExplanation}
                handleReturnUrl={(url) => setForm({ ...form, explanationVideo: url })}
                setVideoMedia={setVideoMedia}
                openUploadExplanation={openUploadExplanation}
              />
              <img src={clip} alt="clip" />
              {videoMedia
                ? <span>{videoMedia}</span>
                : <span>Anexar mídia</span>}
            </div>
            <span className={style['counter-span']}>
              {form.explanationText === '' ? 1620 : caracterTextArea(form.explanationText)}
              /1620
            </span>
          </div>
          {questionInEditing
            ? (
              <div className={style['btns-edit-question']}>
                <div className={style['btn-question']}>
                  <button className="button">Salvar alterações</button>
                </div>
                <div className={style['btn-question']}>
                  <button
                    className="button-ligth-secondary"
                    onClick={() => setOpenModalDeleteQuestion(form.id)}
                  >
                    Remover questão

                  </button>
                </div>
              </div>

            )
            : (
              <div className={style['btn-question']}>
                <button className="button">Adicionar questão</button>
              </div>

            )}
        </form>
      </div>

    </main>
  );
}
