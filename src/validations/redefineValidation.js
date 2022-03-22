import * as yup from 'yup';

const redefineSchema = yup.object().shape({
  email: yup.string().required('Email é obrigatório').email('Favor informar um email válido'),
});

export { redefineSchema };
