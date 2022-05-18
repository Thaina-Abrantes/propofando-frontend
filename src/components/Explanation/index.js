/* eslint-disable jsx-a11y/media-has-caption */
import { useStores } from 'stores';
import close from '../../assets/clear-icon.svg';
import style from './styles.module.scss';

export default function Explanation() {
  const {
    utilsStore: { setOpenExplanation },
    simulatedStore: { questionsSimulated, page },
  } = useStores();

  return (
    <div className={style['container-explanation']}>
      <div className={style.imgClose} onClick={() => setOpenExplanation(false)}>
        <img className={style.close} src={close} alt="Fechar" />
      </div>
      <h1>Explicação</h1>
      {questionsSimulated[page]?.explanationVideo
      && (
      <div className={style.midia}>
        <video width="600" controls>
          <source src={questionsSimulated[page].explanationVideo} type="video/mp4" />
          Seu navegador não suporta esse formato de vídeo.
        </video>

      </div>
      )}
      <p>
        {questionsSimulated[page].explanationText}
      </p>
    </div>
  );
}
