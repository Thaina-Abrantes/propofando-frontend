import Alert from '@mui/material/Alert';

export default function CustomAlert({ message, typeAlert }) {
  return (
    <Alert severity={typeAlert}>
      {message}
    </Alert>

  );
}
