import StudentHeader from 'components/StudentHeader';
import { useState } from 'react';
import style from './styles.module.scss';
import arrow from '../../assets/arrow-back-icon.svg';
import graphic from '../../assets/question.svg';
import report from '../../assets/error-icon.svg';

const questions = [
  {
    title: '1- CRS - PMMG - PM MG - Medicina - Área: Anestesiologia - 2021',
    statment: 'Um paciente de 40 anos, hígido, está sendo submetido a uma laparotomia para fechamento de ostomia, sob anestesia geral balanceada. Após transcorrida cerca de 1h de cirurgia, o monitor chama a atenção do anestesiologista por apresentar uma capnografia que passou do padrão A para o B (ver figuras abaixo). Diante disso, deve o anesteologista:',
    img: graphic,
    optionA: 'Repicar o curare.',
    optionB: 'Verificar a pressão do balonete.',
    optionC: 'Verificar a conexão da linha de capnografia.',
    optionD: 'Trocar a cal sodada.',
  },
  {
    title: '2- TÍTULO SUPERIOR EM ANESTESIOLOGIA (TSA)  - 1995',
    statment: 'Paciente masculino, 20 anos, ASA I foi submetido a tratamento cirúrgico de luxação do ombro direito sob anestesia regional. A técnica realizada foi bloqueio do plexo braquial por via interescalênica com 30 ml de bupivacaína a 0,5% associado a vasoconstrictor. No dia seguinte, o paciente queixava-se de sensação de anestesia no braço e mão direita. A causa mais provável para este acontecimento é:',
    optionA: 'A excessiva retração do ombro pelo cirurgião.',
    optionB: 'O estiramento do plexo braquial.',
    optionC: 'A compressão por posicionamento inadequado no epicôndilo medial.',
    optionD: 'A anestesia residual',
  },
  {
    title: 'Mussum Ipsum, cacilds vidis litro abertis.',
    statment: 'Delegadis gente finis, bibendum egestas augue arcu ut est.Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!Detraxit consequat et quo num tendi nada.Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum.',
    optionA: 'Paisis, filhis, espiritis santis.',
    optionB: 'Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.',
    optionC: 'Copo furadis é disculpa de bebadis, arcu quam euismod magna.',
    optionD: 'Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.',
  },
];

export function Simulated() {
  const [page, setPage] = useState(0);

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
              {questions[page].title}
            </h1>

            <p className={style['question-statment']}>
              {questions[page].statment}
            </p>
            {
              questions[page].img !== undefined
                ? <img className={style.questionImg} src={questions[page].img} alt="Gráfico" />
                : <div />
            }
            <div className={style['alternatives']}>
              <div className={style['container-alternative']}>
                <input type="radio" id="optionA" name="alternative" value="a" />
                <label htmlFor="optionA">
                  A)
                  {' '}
                  {questions[page].optionA}
                </label>
              </div>
              <div className={style['container-alternative']}>
                <input type="radio" id="optionB" name="alternative" value="b" />
                <label htmlFor="optionB">
                  B)
                  {' '}
                  {questions[page].optionB}
                </label>
              </div>
              <div className={style['container-alternative']}>
                <input type="radio" id="optionC" name="alternative" value="c" />
                <label htmlFor="optionC">
                  C)
                  {' '}
                  {questions[page].optionC}
                </label>
              </div>
              <div className={style['container-alternative']}>
                <input type="radio" id="optionD" name="alternative" value="d" />
                <label htmlFor="optionD">
                  D)
                  {' '}
                  {questions[page].optionD}
                </label>
              </div>
            </div>

            <div className={style.reportProblem}>
              <img src={report} alt="Ícone de erro" />
              <span>Reportar problema</span>
            </div>
          </div>

          <div className={style.buttons}>
            <button className={page < questions.length - 1 ? 'button' : 'displayNone'} onClick={() => setPage(page + 1)}>Próxima</button>
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
