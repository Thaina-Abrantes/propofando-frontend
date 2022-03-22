import { useState } from 'react';

export function useModal() {
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);

  return (
    {
      openModalEdit,
      setOpenModalEdit,
      openModalDelete,
      setOpenModalDelete,
    }
  );
}
