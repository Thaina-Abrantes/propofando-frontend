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
  const [selectedOption, setSelectedOption] = useState([]);

  return (
    <div className={style['container-input']}>
      <div className={style.dropdown}>
        <div className={openDropdown ? style['dropdown-select'] : style['dropdown-select-closed']} onClick={() => setOpenDropdown(!openDropdown)}>
          {selectedOption.length !== 0
            ? <span>{selectedOption}</span>
            : <span>Selecionar</span>}
          <img src={openDropdown ? arrowUp : arrowDown} alt="Seta" />
        </div>
        {openDropdown && (
          <div className={style['dropdown-options']}>
            <label className={style['dropdown-option']} key="Todas">
              <input
                type="checkbox"
                id="Todas"
                name="Todas"
              />
              <span className={style.checkmark} />
              Todas
            </label>
            {categorysList.map((item) => (
              <label className={style['dropdown-option']} key={item.id}>
                <input
                  type="checkbox"
                  id={item.id}
                  name={item.name}
                />
                <span className={style.checkmark} />
                {item.name}
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
