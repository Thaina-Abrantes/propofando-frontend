import * as yup from 'yup';

const emailSchema = yup.object().shape({
  email: yup.string().required('Email é obrigatório.').email('Favor informar um email válido.'),
});

const newPasswordSchema = yup.object().shape({
  password: yup.string().required('O campo nova senha é obrigatório.').min(8, 'Mínimo de 8 caracteres.'),
  passwordConfirmation: yup.string().oneOf([yup.ref('password')], 'As senhas devem ser iguais.'),
});

export { emailSchema, newPasswordSchema };
