import { caracterTextArea } from 'utils/caracterTextArea';
import style from './styles.module.scss';

function InputAlternative({ alternative, onInputChange, position }) {
  const { option, description } = alternative;
  const onChange = (e) => onInputChange(e.target, position);

  return (
    <div className={style.option}>
      <div>
        <input
          type="radio"
          name="option"
          value={`option${option}`}
          defaultChecked={alternative.correct}
        />
        <span>{option}</span>
      </div>

      <textarea
        name="description"
        value={description}
        onChange={onChange}
      />
      <span className={style['counter-span']}>
        {description === ''
          ? 1620 : caracterTextArea(description)}
        /1620
      </span>
    </div>
  );
}

export default InputAlternative;
