import { useState } from 'react';
import { useStores } from 'stores';
import style from './styles.module.scss';
import arrowDown from '../../assets/arrow-down.svg';
import arrowUp from '../../assets/arrow-up.svg';

export function InputDropdown({ list, setTypeOfTests, typeOfTests }) {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [allSelected, setAllSelected] = useState(false);

  const {
    utilsStore: { pagesTests },
  } = useStores();

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
        {pagesTests === 'createTest'
          ? (
            <div className={openDropdown ? style['dropdown-select'] : style['dropdown-select-closed']} onClick={() => setOpenDropdown(!openDropdown)}>
              {selectedOptions.length > 0
                ? <div className={style['selected-items']}><span>{[...selectedOptions.join(', ')]}</span></div>
                : <span>Selecionar</span>}
              <img src={openDropdown ? arrowUp : arrowDown} alt="Seta" />
            </div>
          )
          : (
            <div className={openDropdown ? style['dropdown-select'] : style['dropdown-select-closed']} onClick={() => setOpenDropdown(!openDropdown)}>
              {typeOfTests
                ? <div className={style['selected-items']}><span>{typeOfTests}</span></div>
                : <span>Selecionar</span>}
              <img src={openDropdown ? arrowUp : arrowDown} alt="Seta" />
            </div>
          )}
        {openDropdown && (
          <div className={style['dropdown-options']}>
            <div>
              {pagesTests === 'createTest'
                && (
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
                )}
              {pagesTests === 'myTests'
                && (
                <label className={style['dropdown-option']}>
                  <input
                    type="checkbox"
                    id="Todos"
                    name="Todos"
                    onClick={(e) => setTypeOfTests(e.target.name)}
                  />
                  <span className={style.checkmark} />
                  Todos
                </label>
                )}
            </div>
            {list.map((item) => (
              <div key={item.id}>
                <label className={style['dropdown-option']}>
                  <input
                    type="checkbox"
                    id={item.id}
                    name={item.name}
                    onChange={(e) => handleChange(e.target)}
                    onClick={(e) => setTypeOfTests(e.target.name)}
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
