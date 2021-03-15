import * as yup from 'yup';

export const INPUT_SCHEMA = yup.object().shape({
  body: yup
    .string()
    .matches(/[^~,]+/, 'Only keyboard symbols')
    .min(3, 'Too short')
    .required('Enter some text'),
});
