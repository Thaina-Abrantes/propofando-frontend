import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import style from './styles.module.scss';
import arrowBack from '../../assets/arrow-back-icon.svg';
import arrowUp from '../../assets/arrow-up.svg';
import arrowDown from '../../assets/arrow-down.svg';
import clip from '../../assets/annex-icon.svg';

const defaultValuesForm = {
  title: '',
  description: '',
  explanation: '',
  optionA: {
    description: '',
    correct: false,
  },
  optionB: {
    description: '',
    correct: false,
  },
  optionC: {
    description: '',
    correct: false,
  },
  optionD: {
    description: '',
    correct: false,
  },
};

export function AddQuestion() {
  const navigate = useNavigate();
  const [form, setForm] = useState(defaultValuesForm);
  const [selectedRadio, setSelectedRadio] = useState('');
  const titleSize = 200 - (form.title.split('').length);

  const isRadioSelected = (value) => selectedRadio === value;

  const handleRadioClick = (e) => {
    setSelectedRadio(e.target.value);
  };

  function caracterTextArea(type) {
    const textSize = 1620 - type.split('').length;
    return textSize;
  }

  function handleChange(target) {
    setForm({ ...form, [target.name]: target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <main className={style.container}>
      <div className={style['page-header']}>
        <div className={style['header-back']}>
          <button
            onClick={() => navigate('/main/page2')}
          >
            <img src={arrowBack} alt="Voltar" />

          </button>
          <h2>Categorias e questões</h2>
        </div>
        <div>
          <span>Categorias e questões / Adicionar questão</span>
        </div>
      </div>

      <div className={style['page-body']}>
        <h2>Criar questão</h2>

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
            <div className={style['input-select']}>
              <label>
                Categoria
                <select>
                  <option value="0">Select</option>
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
              <div>
                <img src={clip} alt="clip" />
                <span>Anexar mídia</span>
              </div>
              <span className={style['counter-span']}>
                {form.description === '' ? 1620 : caracterTextArea(form.description)}
                /1620
              </span>
            </div>
            <div className={style['question']}>
              <label>
                Adicionar explicação
                <textarea
                  name="explanation"
                  value={form.explanation}
                  maxLength={1620}
                  onChange={(e) => handleChange(e.target)}

                />
              </label>
              <div>
                <img src={clip} alt="clip" />
                <span>Anexar mídia</span>
              </div>
              <span className={style['counter-span']}>
                {form.explanation === '' ? 1620 : caracterTextArea(form.explanation)}
                /1620
              </span>
            </div>
          </div>
          <h3>Alternativas</h3>
          <div className={style.option}>
            <div>
              <input
                type="radio"
                name="alternative"
                value="alternativeA"
                checked={isRadioSelected('alternativeA')}
                onChange={handleRadioClick}
              />
              <span>A)</span>
            </div>

            <textarea
              name="optionA"
              value={form.optionA.description}
              onChange={(e) => handleChange(e.target)}
            />
            <span className={style['counter-span']}>
              {form.optionA.description === '' ? 1620 : caracterTextArea(form.optionA.description)}
              /1620
            </span>
          </div>
          <div className={style.option}>
            <div>
              <input
                type="radio"
                name="alternative"
                value="alternativeB"
                checked={isRadioSelected('alternativeB')}
                onChange={handleRadioClick}
              />
              <span>B)</span>
            </div>
            <textarea
              name="optionB"
              value={form.optionB.description}
              onChange={(e) => handleChange(e.target)}
            />
            <span className={style['counter-span']}>
              {form.optionB.description === '' ? 1620 : caracterTextArea(form.optionB.description)}
              /1620
            </span>
          </div>
          <div className={style.option}>
            <div>
              <input
                type="radio"
                name="alternative"
                value="alternativeC"
                checked={isRadioSelected('alternativeC')}
                onChange={handleRadioClick}
              />
              <span>C)</span>
            </div>
            <textarea
              name="optionC"
              value={form.optionC.description}
              onChange={(e) => handleChange(e.target)}
            />
            <span className={style['counter-span']}>
              {form.optionC.description === '' ? 1620 : caracterTextArea(form.optionC.description)}
              /1620
            </span>
          </div>
          <div className={style.option}>
            <div>
              <input
                type="radio"
                name="alternative"
                value="alternativeD"
                checked={isRadioSelected('alternativeD')}
                onChange={handleRadioClick}
              />
              <span>D)</span>
            </div>
            <textarea
              name="optionD"
              value={form.optionD.description}
              onChange={(e) => handleChange(e.target)}
            />
            <span className={style['counter-span']}>
              {form.optionD.description === '' ? 1620 : caracterTextArea(form.optionD.description)}
              /1620
            </span>
          </div>
          <div className={style['btn-add-question']}>
            <button className="button">Adicionar questão</button>
          </div>
        </form>
      </div>

    </main>
  );
}
