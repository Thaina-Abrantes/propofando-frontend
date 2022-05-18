import { useEffect, useRef } from 'react';
import api from '../../services/api';
import { useStores } from '../../stores';

function Upload({
  open, setOpen, handleReturnUrl, setImgMedia,
  setVideoMedia, openUploadDescription, openUploadExplanation,
}) {
  const {
    userStore: { token },
    utilsStore: { setAlert },
  } = useStores();

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
    if (response.status > 204) {
      setAlert({ open: true, type: 'error', message: response.data.message || response.data });
      return;
    }
    setAlert({ open: true, type: 'success', message: 'Mídia anexada com sucesso.' });

    const { url } = response.data;

    if (openUploadDescription) {
      const arrayImgUrl = url.split('propofando/');
      setImgMedia(arrayImgUrl[arrayImgUrl.length - 1]);
    } else if (openUploadExplanation) {
      const arrayVideoUrl = url.split('propofando/');
      setVideoMedia(arrayVideoUrl[arrayVideoUrl.length - 1]);
    }

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
