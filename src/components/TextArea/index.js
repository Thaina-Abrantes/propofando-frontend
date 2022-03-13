import { useState } from 'react';
import style from './styles.module.scss';

function TextArea() {
  const [textArea, setTextArea] = useState('');

  function handleChange(event) {
    setTextArea(event.target.value);
  }
  const textSize = 1620 - (textArea.split('').length);

  return (
    <form>
      <div className={style.container}>
        <textarea
          className={style.scroll}
          value={textArea}
          maxLength={1620}
          onChange={handleChange}

        />
        <span>
          {textArea === '' ? 1620 : textSize }
          /1620
        </span>
      </div>
    </form>
  );
}

export default TextArea;
