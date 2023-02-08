import * as yup from "yup"
const options = JSON.parse(localStorage.getItem('DEGREE-OPTIONS'))
export const educationV = yup.object({
 school: yup
  .string()
  .required()
  .min(2,),
 degree: yup
  .string()
  .oneOf(options.map(opt => opt.title))
  .required(),
 educationDate: yup
  .date()
  .required(),
 aboutSchool: yup
  .string()
  .required(),
});