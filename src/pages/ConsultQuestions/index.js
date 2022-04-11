import StudentHeader from 'components/StudentHeader';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStores } from 'stores';
import Explanation from 'components/Explanation';
import QuestionStatistics from 'components/QuestionStatistics';
import ReportProblem from 'components/ReportProblem';
import style from './styles.module.scss';
import arrow from '../../assets/arrow-back-icon.svg';
import reportIcon from '../../assets/error-icon.svg';
import error from '../../assets/alert-error-close.svg';
import success from '../../assets/success-icon.svg';
import analytics from '../../assets/analytics-icon.svg';
import school from '../../assets/school-icon.svg';

const test = [
  {
    title: '1- CRS - PMMG - PM MG - Medicina - Área: Anestesiologia - 2021',
    statment: 'Um paciente de 40 anos, hígido, está sendo submetido a uma laparotomia para fechamento de ostomia, sob anestesia geral balanceada. Após transcorrida cerca de 1h de cirurgia, o monitor chama a atenção do anestesiologista por apresentar uma capnografia que passou do padrão A para o B (ver figuras abaixo). Diante disso, deve o anesteologista:',
    optionA: 'Repicar o curare.',
    optionB: 'Verificar a pressão do balonete.',
    optionC: 'Verificar a conexão da linha de capnografia.',
    optionD: 'Trocar a cal sodada.',
    correct: 'optionD',
    selected: 'optionB',
  },
  {
    title: '2- TÍTULO SUPERIOR EM ANESTESIOLOGIA (TSA)  - 1995',
    statment: 'Paciente masculino, 20 anos, ASA I foi submetido a tratamento cirúrgico de luxação do ombro direito sob anestesia regional. A técnica realizada foi bloqueio do plexo braquial por via interescalênica com 30 ml de bupivacaína a 0,5% associado a vasoconstrictor. No dia seguinte, o paciente queixava-se de sensação de anestesia no braço e mão direita. A causa mais provável para este acontecimento é:',
    optionA: 'A excessiva retração do ombro pelo cirurgião.',
    optionB: 'O estiramento do plexo braquial.',
    optionC: 'A compressão por posicionamento inadequado no epicôndilo medial.',
    optionD: 'A anestesia residual',
    correct: 'optionA',
    selected: 'optionA',
  },
  {
    title: 'Lorem Ipsum',
    statment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non auctor sapien, sit amet feugiat erat. Quisque in suscipit velit, a feugiat purus. Curabitur molestie felis dolor, sit amet congue est imperdiet in. Quisque quis aliquam orci, quis gravida tellus. Nunc eleifend tellus eget massa pellentesque commodo. Curabitur vestibulum purus erat, et sagittis lorem condimentum nec. Duis eleifend congue dui, eu ultricies erat. Cras nec ex nec orci molestie ultrices. Proin interdum ac nulla efficitur vestibulum. Nulla aliquam accumsan velit. Curabitur interdum pulvinar bibendum. Nulla vitae tempus metus.',
    optionA: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    optionB: 'Nam ac augue pellentesque, bibendum urna convallis, ornare leo.',
    optionC: 'Vivamus a augue vitae risus cursus ornare ut eu tellus.',
    optionD: 'Donec placerat mi eu maximus eleifend.',
    correct: 'optionC',
    selected: 'optionD',
  },
];

export function ConsultQuestions() {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);

  const {
    utilsStore: {
      openReportProblem,
      setOpenReportProblem,
      openExplanation,
      setOpenExplanation,
      openQuestionStatistics,
      setOpenQuestionStatistics,
    },
  } = useStores();

  return (
    <main className={style['container-consult']}>
      <div className={style['container-title']}>
        <button onClick={() => navigate('/student/main/my-tests')}>
          <img src={arrow} alt="Seta" />
        </button>
        <h1>Simulado</h1>
      </div>

      <div className={style.container}>
        <div className={style['container-question']}>
          <h1 className={style['question-title']}>
            {test[page].title}
          </h1>

          <p className={style['question-statment']}>
            {test[page].statment}
          </p>
          {
            test[page].img !== undefined
              ? <img className={style.questionImg} src={test[page].img} alt="Imagem" />
              : <div />
          }
          <div className={style['alternatives']}>
            <div className={test[page].correct === 'optionA' ? style.background : style.alternative}>
              {
                test[page].correct === 'optionA'
                  ? <img src={success} alt="Certo" />
                  : <img src={error} alt="Erro" />
              }
              {
                test[page].selected === 'optionA'
                  ? <div className={style.inputCorrect} />
                  : <div className={style.inputError} />
              }
              <span className={test[page].correct !== 'optionA' && style.errorSpan}>
                A)
                {' '}
                {test[page].optionA}
              </span>
            </div>
            <div className={test[page].correct === 'optionB' ? style.background : style.alternative}>
              {
                test[page].correct === 'optionB'
                  ? <img src={success} alt="Certo" />
                  : <img src={error} alt="Erro" />
              }
              {
                test[page].selected === 'optionB'
                  ? <div className={style.inputCorrect} />
                  : <div className={style.inputError} />
              }
              <span className={test[page].correct !== 'optionB' && style.errorSpan}>
                B)
                {' '}
                {test[page].optionB}
              </span>
            </div>
            <div className={test[page].correct === 'optionC' ? style.background : style.alternative}>
              {
                test[page].correct === 'optionC'
                  ? <img src={success} alt="Certo" />
                  : <img src={error} alt="Erro" />
              }
              {
                test[page].selected === 'optionC'
                  ? <div className={style.inputCorrect} />
                  : <div className={style.inputError} />
              }
              <span className={test[page].correct !== 'optionC' && style.errorSpan}>
                C)
                {' '}
                {test[page].optionC}
              </span>
            </div>
            <div className={test[page].correct === 'optionD' ? style.background : style.alternative}>
              {
                test[page].correct === 'optionD'
                  ? <img src={success} alt="Certo" />
                  : <img src={error} alt="Erro" />
              }
              {
                test[page].selected === 'optionD'
                  ? <div className={style.inputCorrect} />
                  : <div className={style.inputError} />
              }
              <span className={test[page].correct !== 'optionD' && style.errorSpan}>
                D)
                {' '}
                {test[page].optionD}
              </span>
            </div>
          </div>
          <div className={style['container-links']}>
            <div className={style.links}>
              <button onClick={() => setOpenExplanation(true)}>
                <img src={school} alt="Ícone de erro" />
                <span>Consultar explicação</span>
              </button>
            </div>

            <div className={style.links}>
              <button onClick={() => setOpenQuestionStatistics(true)}>
                <img src={analytics} alt="Ícone de erro" />
                <span>Estatísticas da questão</span>
              </button>
            </div>

            <div className={style.links}>
              <button onClick={() => setOpenReportProblem(true)}>
                <img src={reportIcon} alt="Ícone de erro" />
                <span>Reportar problema</span>
              </button>
            </div>
          </div>

          <div className={style.progress}>
            <span>
              Respondidas
              {' '}
              {test.length}
              {' '}
              de
              {' '}
              {test.length}
            </span>
          </div>
        </div>

        {openExplanation && (<Explanation />)}
        {openQuestionStatistics && (<QuestionStatistics />)}
        {openReportProblem && (<ReportProblem />)}

        <div className={style.buttons}>
          <button className={page === 0 ? 'displayNone' : 'button'} onClick={() => setPage(page - 1)}>Anterior</button>
          <button className={page === test.length - 1 ? 'displayNone' : 'button'} onClick={() => setPage(page + 1)}>Próxima</button>
        </div>
      </div>
    </main>
  );
}
