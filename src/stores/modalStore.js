import { useState } from 'react';

export function useModal() {
  const [openModalEdit, setOpenModalEdit] = useState(false);

  return (
    {
      openModalEdit,
      setOpenModalEdit,
    }
  );
}
