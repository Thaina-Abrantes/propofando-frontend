import { toast } from 'react-toastify';

export default function notify(message, duration) {
  toast(message, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: duration || 3000,
    closeOnClick: true,
    hideProgressBar: true,
  });
}
