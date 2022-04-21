import * as yup from 'yup';

const loginSchema = yup.object().shape({
  email: yup.string().required('Email é obrigatório').email('Favor informar um email válido'),
  password: yup.string().required('Senha é obrigatório'),
});

export { loginSchema };
