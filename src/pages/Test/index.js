import StudentHeader from 'components/StudentHeader';
import { useState } from 'react';
import { useStores } from 'stores';
import { useNavigate } from 'react-router-dom';
import ModalEndTest from 'components/ModalEndTest';
import ReportProblem from 'components/ReportProblem';
import style from './styles.module.scss';
import arrow from '../../assets/arrow-back-icon.svg';
import graphic from '../../assets/question.svg';
import reportIcon from '../../assets/error-icon.svg';

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
    title: 'Lorem Ipsum',
    statment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non auctor sapien, sit amet feugiat erat. Quisque in suscipit velit, a feugiat purus. Curabitur molestie felis dolor, sit amet congue est imperdiet in. Quisque quis aliquam orci, quis gravida tellus. Nunc eleifend tellus eget massa pellentesque commodo. Curabitur vestibulum purus erat, et sagittis lorem condimentum nec. Duis eleifend congue dui, eu ultricies erat. Cras nec ex nec orci molestie ultrices. Proin interdum ac nulla efficitur vestibulum. Nulla aliquam accumsan velit. Curabitur interdum pulvinar bibendum. Nulla vitae tempus metus.',
    optionA: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    optionB: 'Nam ac augue pellentesque, bibendum urna convallis, ornare leo.',
    optionC: 'Vivamus a augue vitae risus cursus ornare ut eu tellus.',
    optionD: 'Donec placerat mi eu maximus eleifend.',
  },
];

export function Test() {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);

  const {
    modalStore: {
      openModalEndTest,
      setOpenModalEndTest,
    },
  } = useStores();

  const {
    utilsStore: {
      openReportProblem,
      setOpenReportProblem,
    },
  } = useStores();

  function handleClickPrev() {
    setPage(page - 1);
    setOpenReportProblem(false);
  }

  function handleClickNext() {
    setPage(page + 1);
    setOpenReportProblem(false);
  }

  function handleClickEnd() {
    setOpenReportProblem(false);
    setOpenModalEndTest(true);
  }

  return (
    <main className={style['container-main']}>
      {
        openModalEndTest
        && <ModalEndTest />
      }

      <StudentHeader />

      <div className={style['container-title']}>
        <button onClick={() => navigate('/student/main/create-test')}>
          <img src={arrow} alt="Seta" />
        </button>
        <h1>Simulado</h1>
      </div>

      <div className={style.container}>
        <div>
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
              <button onClick={() => setOpenReportProblem(true)}>
                <img src={reportIcon} alt="Ícone de erro" />
                <span>Reportar problema</span>
              </button>
            </div>

            <div className={style.progress}>
              <span>
                Respondidas
                {' '}
                {page + 1}
                {' '}
                de
                {' '}
                {questions.length}
              </span>
            </div>
          </div>

          {openReportProblem && (<ReportProblem />)}

          <div className={style.buttons}>
            <button className={page === 0 || page === questions.length - 1 ? 'displayNone' : 'button'} onClick={() => handleClickPrev()}>Anterior</button>
            <button className={page === questions.length - 1 ? 'button-dark-secondary' : 'displayNone'} onClick={() => handleClickPrev()}>Anterior</button>
            <button className={page < questions.length - 1 ? 'button' : 'displayNone'} onClick={() => handleClickNext()}>Próxima</button>
            <button className={page !== questions.length - 1 ? 'button-dark-secondary' : 'displayNone'} onClick={() => setOpenReportProblem(false)}>Pausar simulado</button>
            <button className={page === questions.length - 1 ? 'button' : 'displayNone'} onClick={() => handleClickEnd()}>Finalizar simulado</button>
          </div>
        </div>
      </div>
    </main>
  );
}
