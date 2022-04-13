import * as yup from 'yup';

const loginSchema = yup.object().shape({
  email: yup.string().required('Email é obrigatório').email('Favor informar um email válido'),
  password: yup.string().required('Senha é obrigatório').min(6, 'Mínimo de 6 caracteres'),
});

export { loginSchema };
