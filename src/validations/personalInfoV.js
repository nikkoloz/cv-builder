import * as yup from "yup"

export const personalInfoV = yup.object({
 name: yup
  .string()
  .required()
  .min(2)
  .matches(/^[ა-ჰ]+$/),
 surname: yup
  .string()
  .required()
  .min(2)
  .matches(/^[ა-ჰ]+$/),
 image: yup.mixed().required().test("is-image", "Selected file is not an image. Valid extensions: jpeg, jpg, png", value => {
  if (!value) return true;
  return ["jpeg", "jpg", "png"].includes(value.split("/")[1].split(";")[0])
 }),
 aboutMe: yup.string().notRequired(),
 email: yup
  .string()
  .required()
  .matches(/^[a-zA-Z0-9.]+@redberry.ge$/),
 mobile: yup
  .string()
  .required()
  .matches(/^\+995\d{9}$/)
});