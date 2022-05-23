import { useEffect, useState } from 'react';
import style from './styles.module.scss';
import triangleDown from '../../assets/triangle-down.svg';
import triangleUp from '../../assets/triangle-up.svg';

export function InputDropdown({ list, categoriesIds, setCategoriesIds }) {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  function clearSelectedALL() {
    const checkados = document.querySelectorAll('input:checked');

    const selectedName = [];
    const selectedId = [];
    if (checkados.length) {
      for (const { id, name } of checkados) {
        selectedName.push(name);
        selectedId.push(id);
      }
      setSelectedOptions(selectedName);
      setCategoriesIds(selectedId);
      return;
    }
    setSelectedOptions([]);
    setCategoriesIds([]);
  }

  function handleSelectALL({ checked }) {
    if (checked) {
      const everything = list.map((i) => i.name);
      setSelectedOptions(everything);

      const everythingIds = list.map((i) => i.id);
      return setCategoriesIds(everythingIds);
    }
    clearSelectedALL();
  }

  function handleChange({ name, id, checked }) {
    if (document.getElementById('Todas').checked !== false) {
      document.getElementById('Todas').checked = false;
      clearSelectedALL();
      setSelectedOptions([name]);
      return setCategoriesIds([id]);
    }
    if (checked) {
      if (selectedOptions.includes(name)) {
        return;
      }
      setSelectedOptions([...selectedOptions, name]);
      return setCategoriesIds([...categoriesIds, id]);
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
                onChange={(e) => handleSelectALL(e.target)}
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
