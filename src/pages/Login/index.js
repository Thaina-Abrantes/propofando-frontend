import { Button } from '@mui/material';
import { useState } from 'react';
import { useStores } from '../../stores';
import style from './styles.module.scss';

export function Login() {
  const [componentCount, setComponentCount] = useState(0);

  const {
    counterStore: {
      count, increment,
    },
  } = useStores();

  return (
    <div className={style.container}>
      <h1>
        Page state:
        {componentCount}
      </h1>
      <h1>
        Context state:
        {count}
      </h1>
      <Button
        variant="contained"
        onClick={() => setComponentCount(componentCount + 1)}
      >
        Increment page state
      </Button>

      <Button
        style={{ margin: 8 }}
        variant="contained"
        onClick={() => increment()}
      >
        Increment context state
      </Button>

    </div>
  );
}
