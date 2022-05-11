import { useStores } from 'stores';
import { useEffect } from 'react';
import close from '../../assets/clear-icon.svg';
import square from '../../assets/square.svg';
import play from '../../assets/play.svg';
import style from './styles.module.scss';

export default function Explanation() {
  const {
    utilsStore: { setOpenExplanation },
    simulatedStore: { dataAnswers, page },
  } = useStores();

  useEffect(() => {
    console.log(dataAnswers, 'data', page, 'page');
  }, []);

  return (
    <div className={style['container-explanation']}>
      <div className={style.imgClose} onClick={() => setOpenExplanation(false)}>
        <img className={style.close} src={close} alt="Fechar" />
      </div>
      <h1>Explicação</h1>
      {dataAnswers[page]?.explanationVideo
      && (
      <div className={style.midia}>
        <img className={style.play} src={play} alt="Midia" />
        <img className={style.square} src={square} alt="Midia" />
        <img src={dataAnswers[page].explanationVideo} alt="Midia" />
      </div>
      )}
      <p>
        {dataAnswers[page].explanationText}
      </p>
    </div>
  );
}
