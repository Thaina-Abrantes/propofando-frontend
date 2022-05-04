import { useState } from 'react';
import style from './styles.module.scss';
import arrowDown from '../../assets/arrow-down.svg';
import arrowUp from '../../assets/arrow-up.svg';

export function InputDropdown({ list }) {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState([]);

  function handleSelect(item) {
    if (selectedOption.includes(item.name)) {
      return;
    }
    setSelectedOption([...selectedOption, item.name]);
    console.log(selectedOption);
  }

  return (
    <div className={style['container-input']}>
      <div className={style.dropdown}>
        <div className={openDropdown ? style['dropdown-select'] : style['dropdown-select-closed']} onClick={() => setOpenDropdown(!openDropdown)}>
          {selectedOption.length > 0
            ? <div className={style['selected-items']}><span>{[...selectedOption.join(', ')]}</span></div>
            : <span>Selecionar</span>}
          <img src={openDropdown ? arrowUp : arrowDown} alt="Seta" />
        </div>
        {openDropdown && (
          <div className={style['dropdown-options']}>
            <div>
              <label className={style['dropdown-option']}>
                <input
                  type="checkbox"
                  id="Todas"
                  name="Todas"
                />
                <span className={style.checkmark} />
                Todas
              </label>
            </div>
            {list.map((item) => (
              <div key={item.id} onClick={() => handleSelect(item)}>
                <label className={style['dropdown-option']}>
                  <input
                    type="checkbox"
                    id={item.id}
                    name={item.name}
                  />
                  <span className={style.checkmark} />
                  {item.name}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
