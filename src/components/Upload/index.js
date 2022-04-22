import { useEffect, useRef } from 'react';
import api from '../../services/api';
import { useStores } from '../../stores';

function Upload({ open, setOpen, handleReturnUrl }) {
  const { userStore: { token } } = useStores();

  const inputFileRef = useRef(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    inputFileRef.current.click();
  }, [open]);

  async function upload(currentFile) {
    const formData = new FormData();
    formData.append('file', currentFile);

    const response = await api('/upload', {
      method: 'post',
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    });

    const { url } = response.data;
    handleReturnUrl(url);
  }

  function handleChange(event) {
    const currentFile = event.target.files[0];

    if (!currentFile) {
      return;
    }

    upload(currentFile);

    setOpen(false);
  }

  return (
    <input
      ref={inputFileRef}
      onChange={handleChange}
      type="file"
      accept="video/*,image/*"
      style={{ display: 'none' }}
    />
  );
}

export default Upload;
