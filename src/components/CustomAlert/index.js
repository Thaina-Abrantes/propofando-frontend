import Alert from '@mui/material/Alert';

export default function CustomAlert({ message, type }) {
  return (
    <Alert
      variant="outlined"
      severity={type}
      sx={{
        width: 500,
      }}
    >
      {message}
    </Alert>

  );
}
