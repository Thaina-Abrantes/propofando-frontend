import { useState } from 'react';
import style from './styles.module.scss';
import arrowDown from '../../assets/arrow-down.svg';
import arrowUp from '../../assets/arrow-up.svg';

export function InputDropdown({ list }) {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  function handleChange(target) {
    if (target.checked) {
      setSelectedOptions([...selectedOptions, target.name]);
    } else {
      const filtered = selectedOptions.filter((i) => i !== target.name);
      setSelectedOptions(filtered);
    }
  }

  function handleChangeAll(target) {
    if (target.checked) {
      const everything = list.map((i) => i.name);
      setSelectedOptions(everything);
    } else {
      setSelectedOptions([]);
    }
  }
  console.log(selectedOptions);

  return (
    <div className={style['container-input']}>
      <div className={style.dropdown}>
        <div className={openDropdown ? style['dropdown-select'] : style['dropdown-select-closed']} onClick={() => setOpenDropdown(!openDropdown)}>
          {selectedOptions.length > 0
            ? <div className={style['selected-items']}><span>{[...selectedOptions.join(', ')]}</span></div>
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
                  onChange={(e) => handleChangeAll(e.target)}
                />
                <span className={style.checkmark} />
                Todas
              </label>
            </div>
            {list.map((item) => (
              <div key={item.id}>
                <label className={style['dropdown-option']}>
                  <input
                    type="checkbox"
                    id={item.id}
                    name={item.name}
                    onChange={(e) => handleChange(e.target)}
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
