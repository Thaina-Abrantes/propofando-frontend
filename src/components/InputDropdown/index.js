import { useState } from 'react';
import style from './styles.module.scss';
import arrowDown from '../../assets/arrow-down.svg';
import arrowUp from '../../assets/arrow-up.svg';
import squareSelected from '../../assets/squareSelected.svg';
import squareUnselected from '../../assets/squareUnselected.svg';
import squareDisabled from '../../assets/square-disabled.svg';
import success from '../../assets/success-white.svg';

export function InputDropdown({ categorysList }) {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState(false);

  return (
    <div className={style['container-input']}>
      <div className={style.dropdown}>
        <div className={openDropdown ? style['dropdown-select'] : style['dropdown-select-closed']} onClick={() => setOpenDropdown(!openDropdown)}>
          {selectedOption
            ? <span>{selectedOption}</span>
            : <span>Selecionar</span>}
          <img src={openDropdown ? arrowUp : arrowDown} alt="Seta" />
        </div>
        {openDropdown && (
          <div className={style['dropdown-options']}>
            <div
              className={style['dropdown-option-select']}
              onClick={() => {
                setSelectedOption('Selecionar');
                setOpenDropdown(false);
              }}
            >
              <img src={squareDisabled} alt="Input branco" />
              <span>Selecionar</span>
            </div>
            {categorysList.map((item) => (
              <div
                className={style['dropdown-option']}
                onClick={(e) => {
                  setSelectedOption(item.name);
                  setOpenDropdown(false);
                }}
              >
                {selectedOption
                  ? (
                    <div className={style['img-selected']}>
                      <img src={squareSelected} alt="Input selecionado" />
                      <img className={style.success} src={success} alt="Ícone selecionado" />
                    </div>
                  )
                  : (
                    <img src={squareUnselected} alt="Input branco" />
                  )}
                <span className={selectedOption && style['category-selected']}>{item.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
