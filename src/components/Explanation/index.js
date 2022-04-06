import midia from '../../assets/foto-video.svg';
import close from '../../assets/clear-icon.svg';
import square from '../../assets/square.svg';
import play from '../../assets/play.svg';
import style from './styles.module.scss';

export default function Explanation({ setOpenExplanation }) {
  return (
    <div className={style['container-explanation']}>
      <div className={style.imgClose} onClick={() => setOpenExplanation(false)}>
        <img className={style.close} src={close} alt="Fechar" />
      </div>
      <h1>Explicação</h1>
      <div className={style.midia}>
        <img className={style.play} src={play} alt="Midia" />
        <img className={style.square} src={square} alt="Midia" />
        <img src={midia} alt="Midia" />
      </div>
      <p>
        O plexo braquial normalmente não
        sofre retração durante correção cirúrgica de luxação do ombro.
        A compressão prolongada do plexo braquial pode resultar
        em áreas de anestesia no braço ou mão. Isto pode ocorrer se
        a estrutura ficar pinçada entre a clavícula e a cabeça do
        úmero, como pode ser vista em pacientes colocados em
        posição acentuada de Trendelenburg com os ombros
        apoiados fortemente sobre o suporte da mesa. Compressão
        prolongada no epicôndilo medial pode provocar neuropatia
        ulnar, enquanto compressão prolongada contra a superfície
        posterior do úmero pode promover neuropatia radial.
        A bupivacaína é um anestésico local de longa duração e pode
        produzir anestesia por 24 horas ou mais.
      </p>
      <span>
        Referências
        Brown DL - Atlas of Regional Anesthesia. Philadelphia, Saunders,1992;43
        Murphy MT - Bloqueios Nervosos, em: Miller RD - Tratado de
        Anestesia. São Paulo, Manole, 1989; 1037-1039
      </span>
    </div>
  );
}
