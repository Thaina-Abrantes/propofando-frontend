import TableTop3 from 'components/TableTop3';
import TableInfoCategories from 'components/TableInfoCategories';
import { useState } from 'react';
import style from './styles.module.scss';
import lamp from '../../assets/lamp-icon.svg';

export function StudentPage() {
  const [noData, setNoData] = useState(true);

  return (
    <div className={style['container-page']}>
      <div className={style['container-buttons']}>
        <button className="button">Criar um simulado</button>
        <button className="button">Meus simulados</button>
      </div>
      <h2>Desempenho</h2>
      <div className={style['container-cards']}>
        <div className={style['card']}>
          <h3>Simulados feitos</h3>
          <h1>{noData ? 0 : 5}</h1>
        </div>
        <div className={style['card']}>
          <h3>Questões respondidas</h3>
          <h1>{noData ? 0 : '20%'}</h1>
        </div>
      </div>
      <div className={style['container-tabletop3']}>
        <TableTop3
          label="Categorias que mais acertou"
          category1="Categoria A"
          category2="Categoria F"
          category3="Categoria G"
          amount1="65 questões"
          amount2="57 questões"
          amount3="44 questões"
        />
        <TableTop3
          label="Categorias que mais errou"
          category1="Categoria B"
          category2="Categoria D"
          category3="Categoria C"
          amount1="30 questões"
          amount2="24 questões"
          amount3="19 questões"
        />
      </div>
      {!noData
         && (
         <div className={style['info']}>
           <img src={lamp} alt="Lampada" />
           <p>
             Você sabia? Com base nos resultados dos simulados,
             sua média de acertos geral é de 77%.
           </p>
         </div>
         )}
      <TableInfoCategories />
    </div>
  );
}
