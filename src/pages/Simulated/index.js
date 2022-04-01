import StudentHeader from 'components/StudentHeader';
import { useState, useEffect } from 'react';
import style from './styles.module.scss';
import arrow from '../../assets/arrow-back-icon.svg';
import graphic from '../../assets/question.svg';
import report from '../../assets/error-icon.svg';

export function Simulated() {
  const [page, setPage] = useState(0);
  const [title, setTitle] = useState([]);
  const [statment, setStatment] = useState([]);
  const [img, setImg] = useState();
  const [alternativeA, setAlterdnativeA] = useState([]);
  const [alternativeB, setAlternativeB] = useState([]);
  const [alternativeC, setAlternativeC] = useState([]);
  const [alternativeD, setAlternativeD] = useState([]);

  const questions = [
    {
      title: '1- CRS - PMMG - PM MG - Medicina - Área: Anestesiologia - 2021',
      statment: 'Um paciente de 40 anos, hígido, está sendo submetido a uma laparotomia para fechamento de ostomia, sob anestesia geral balanceada. Após transcorrida cerca de 1h de cirurgia, o monitor chama a atenção do anestesiologista por apresentar uma capnografia que passou do padrão A para o B (ver figuras abaixo). Diante disso, deve o anesteologista:',
      src: graphic,
      alternativeA: 'Repicar o curare.',
      alternativeB: 'Verificar a pressão do balonete.',
      alternativeC: 'Verificar a conexão da linha de capnografia.',
      alternativeD: 'Trocar a cal sodada.',
    },
    {
      title: '2- TÍTULO SUPERIOR EM ANESTESIOLOGIA (TSA)  - 1995',
      statment: 'Paciente masculino, 20 anos, ASA I foi submetido a tratamento cirúrgico de luxação do ombro direito sob anestesia regional. A técnica realizada foi bloqueio do plexo braquial por via interescalênica com 30 ml de bupivacaína a 0,5% associado a vasoconstrictor. No dia seguinte, o paciente queixava-se de sensação de anestesia no braço e mão direita. A causa mais provável para este acontecimento é:',
      alternativeA: 'A excessiva retração do ombro pelo cirurgião.',
      alternativeB: 'O estiramento do plexo braquial.',
      alternativeC: 'A compressão por posicionamento inadequado no epicôndilo medial.',
      alternativeD: 'A anestesia residual',
    },
    {
      title: 'Mussum Ipsum, cacilds vidis litro abertis.',
      statment: 'Delegadis gente finis, bibendum egestas augue arcu ut est.Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!Detraxit consequat et quo num tendi nada.Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum.',
      alternativeA: 'Paisis, filhis, espiritis santis.',
      alternativeB: 'Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.',
      alternativeC: 'Copo furadis é disculpa de bebadis, arcu quam euismod magna.',
      alternativeD: 'Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.',
    },
  ];

  const handleNextPage = () => {
    setPage(+1);
    setQuestion();
  };

  const setQuestion = () => {
    const question = questions[page];

    setTitle(question.title);
    setStatment(question.statment);
    setImg(question.src);
    setAlterdnativeA(question.alternativeA);
    setAlternativeB(question.alternativeB);
    setAlternativeC(question.alternativeC);
    setAlternativeD(question.alternativeD);
  };

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
              {title}
            </h1>

            <p className={style['question-statment']}>
              {statment}
            </p>

            <img className={style.questionImg} src={graphic} alt="Gráfico" />

            <div className={style['alternatives']}>
              <div className={style['container-alternative']}>
                <input type="radio" id="alternativeA" name="alternative" value="a" />
                <label htmlFor="alternativeA">
                  A)
                  {' '}
                  {alternativeA}
                </label>
              </div>
              <div className={style['container-alternative']}>
                <input type="radio" id="alternativeB" name="alternative" value="b" />
                <label htmlFor="alternativeB">
                  B)
                  {' '}
                  {alternativeB}
                </label>
              </div>
              <div className={style['container-alternative']}>
                <input type="radio" id="alternativeC" name="alternative" value="c" />
                <label htmlFor="alternativeC">
                  C)
                  {' '}
                  {alternativeC}
                </label>
              </div>
              <div className={style['container-alternative']}>
                <input type="radio" id="alternativeD" name="alternative" value="d" />
                <label htmlFor="alternativeD">
                  D)
                  {' '}
                  {alternativeD}
                </label>
              </div>
            </div>

            <div className={style.reportProblem}>
              <img src={report} alt="Ícone de erro" />
              <span>Reportar problema</span>
            </div>
          </div>

          <div className={style.buttons}>
            <button className={page < questions.length - 1 ? 'button' : 'displayNone'} onClick={() => handleNextPage()}>Próxima</button>
            <button className={page === 0 || questions.length - 1 ? 'displayNone' : 'button'}>Anterior</button>
            <button className={page === questions.length - 1 ? 'button-dark-secondary' : 'displayNone'}>Anterior</button>
            <button className={page !== questions.length - 1 ? 'button-dark-secondary' : 'displayNone'}>Pausar simulado</button>
            <button className={page === questions.length - 1 ? 'button' : 'displayNone'}>Finalizar simulado</button>
          </div>
        </form>
      </div>
    </main>
  );
}
