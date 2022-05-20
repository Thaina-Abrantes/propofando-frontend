import { useState } from 'react';
import style from './styles.module.scss';
import triangleDown from '../../assets/triangle-down.svg';
import triangleUp from '../../assets/triangle-up.svg';

export function InputDropdown({ list, categoriesIds, setCategoriesIds }) {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [allSelected, setAllSelected] = useState(false);

  function handleChange({ name, id, checked }) {
    if (checked && name === 'Todas') {
      setAllSelected(true);

      const everything = list.map((i) => i.name);
      setSelectedOptions(everything);

      const everythingIds = list.map((i) => i.id);
      setCategoriesIds(everythingIds);
    } else if (!checked && name === 'Todas') {
      setAllSelected(false);
      setSelectedOptions([]);
      setCategoriesIds([]);
    } else if (checked && name !== 'Todas') {
      if (selectedOptions.includes(name)) {
        return;
      }
      setSelectedOptions([...selectedOptions, name]);
      setCategoriesIds([...categoriesIds, id]);
    } else {
      if (allSelected) {
        return;
      }
      const filtered = selectedOptions.filter((i) => i !== name);
      setSelectedOptions(filtered);

      const filteredIds = categoriesIds.filter((i) => i !== id);
      setCategoriesIds(filteredIds);
    }
  }

  return (
    <div className={style['container-input']}>
      <div
        className={openDropdown
          ? style['dropdown-select']
          : style['dropdown-select-closed']}
        onClick={() => setOpenDropdown(!openDropdown)}
      >
        {selectedOptions.length > 0
          ? (
            <div className={style['selected-items']}>
              <span>{[...selectedOptions.join(', ')]}</span>
            </div>
          )
          : <span>Selecionar</span>}
        <img
          src={openDropdown
            ? triangleUp
            : triangleDown}
          alt="Seta"
        />
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
              <span>Todas</span>
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
                <span>{item.name}</span>
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
