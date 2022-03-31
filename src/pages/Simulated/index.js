import StudentHeader from 'components/StudentHeader';
import style from './styles.module.scss';
import arrow from '../../assets/arrow-back-icon.svg';
import graphic from '../../assets/question.svg';

export function Simulated() {
  return (
    <main className={style['container-main']}>
      <StudentHeader />

      <div className={style['container-title']}>
        <img src={arrow} alt="Seta" />
        <h1>Simulado</h1>
      </div>

      <div className={style.container}>
        <form>
          <div className={style['container-question']}>
            <h1 className={style['question-title']}>
              1- CRS - PMMG - PM MG - Medicina - Área: Anestesiologia - 2021
            </h1>
            <p className={style['question-statment']}>
              Um paciente de 40 anos, hígido, está sendo submetido a uma laparotomia
              para fechamento de ostomia, sob anestesia geral balanceada.
              Após transcorrida cerca de 1h de cirurgia,
              o monitor chama a atenção do anestesiologista por apresentar uma capnografia
              que passou do padrão A para o B (ver figuras abaixo).
              Diante disso, deve o anesteologista:
            </p>
            <img src={graphic} alt="Gráfico" />
            <div className={style['question-alternatives']}>
              <div className={style['alternative']}>
                <input type="radio" id="a" />
                <span>A) Repicar o curare.</span>
              </div>
              <div className={style.alternative}>
                <input type="radio" id="b" />
                <span>B) Verificar a pressão do balonete.</span>
              </div>
              <div className={style.alternative}>
                <input type="radio" id="c" />
                <span>C) Verificar a conexão da linha de capnografia.</span>
              </div>
              <div className={style.alternative}>
                <input type="radio" id="d" />
                <span>D) Trocar a cal sodada.</span>
              </div>
            </div>
          </div>

          <div className={style.buttons} />
        </form>
      </div>
    </main>
  );
}
