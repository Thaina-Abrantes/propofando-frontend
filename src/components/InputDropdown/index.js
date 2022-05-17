import { useState } from 'react';
import { useStores } from 'stores';
import style from './styles.module.scss';
import triangleDown from '../../assets/triangle-down.svg';
import triangleUp from '../../assets/triangle-up.svg';

export function InputDropdown({ list }) {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [allSelected, setAllSelected] = useState(false);

  function handleChange(target) {
    if (target.checked && target.name === 'Todas') {
      setAllSelected(true);
      const everything = list.map((i) => i.name);
      setSelectedOptions(everything);
    } else if (!target.checked && target.name === 'Todas') {
      setAllSelected(false);
      setSelectedOptions([]);
    } else if (target.checked && target.name !== 'Todas') {
      if (selectedOptions.includes(target.name)) {
        return;
      }
      setSelectedOptions([...selectedOptions, target.name]);
    } else {
      if (allSelected) {
        return;
      }
      const filtered = selectedOptions.filter((i) => i !== target.name);
      setSelectedOptions(filtered);
    }
  }

  return (
    <div className={style['container-input']}>
      <div className={style.dropdown}>
        <div className={openDropdown ? style['dropdown-select'] : style['dropdown-select-closed']} onClick={() => setOpenDropdown(!openDropdown)}>
          {selectedOptions.length > 0
            ? <div className={style['selected-items']}><span>{[...selectedOptions.join(', ')]}</span></div>
            : <span>Selecionar</span>}
          <img src={openDropdown ? triangleUp : triangleDown} alt="Seta" />
        </div>
        {openDropdown && (
          <div className={style['dropdown-options']}>
            <div>
              <label className={style['dropdown-option']}>
                <input
                  type="checkbox"
                  id="Todas"
                  name="Todas"
                  onChange={(e) => handleChange(e.target)}
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
