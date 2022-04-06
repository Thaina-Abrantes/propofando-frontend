import { useStores } from 'stores';
import style from './styles.module.scss';
import close from '../../assets/clear-icon.svg';

export default function ReportProblem() {
  const { utilsStore: { setOpenReportProblem } } = useStores();

  return (
    <div className={style['container-report']}>
      <div className={style.imgClose} onClick={() => setOpenReportProblem(false)}>
        <img src={close} alt="Fechar" />
      </div>
      <h1>Reportar problema</h1>
      <textarea placeholder="Conte-nos qual problema encontrou na questão. Sua contribuição é muito importante para nós." />
      <button className="button" onClick={() => setOpenReportProblem(false)}>Reportar</button>
    </div>
  );
}
