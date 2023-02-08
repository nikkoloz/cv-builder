import InputC from "./InputC";
import { useFormik } from "formik";
import { educationV } from "../validations/educationV";
import valid from "../assets/valid.svg";
import invalid from "../assets/invalid.svg";

const onSubmit = () => {
  console.log("submitted");
};

function EducationForm({ options }) {
  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        school: "",
        degree: "",
        educationDate: "",
        aboutSchool: "",
      },
      validationSchema: educationV,
      onSubmit,
    });
  return (
    <div>
      <InputC
        divClass="mb-[30px]"
        labelText="სასწავლებელი"
        placeholder="სასწავლებელი"
        id="school"
        pText="მინიმუმ 2 სიმბოლო"
        value={values.school}
        onChange={handleChange}
        onBlur={handleBlur("school")}
        touched={touched.school}
        error={errors.school}
      />
      <div className=" flex w-full justify-between">
        <div className={`relative mr-[56px] flex w-full flex-col `}>
          <label className="mb-2 text-lb" htmlFor="degree">
            ხარისხი
          </label>
          <select
            name="degree"
            id="degree"
            className="mb-2 w-full rounded-[4px] border-[1px] border-main-gray3 bg-white px-4 py-[14px] text-lbp focus:shadow-none focus:outline-2"
            value={values.degree}
            onChange={handleChange}
            onBlur={handleBlur("degree")}
          >
            <option>აირჩიეთ ხარისხი</option>
            {options.map((opt) => {
              return (
                <option value={opt.title} key={opt.id}>
                  {opt.title}
                </option>
              );
            })}
          </select>
          <p className=""></p>
        </div>
        <InputC
          divClass="mb-8"
          labelText="დამთავრების რიცხვი"
          id="educationDate"
          inputType="date"
          value={values.educationDate}
          onChange={handleChange}
          onBlur={handleBlur("educationDate")}
          touched={touched.educationDate}
          error={errors.educationDate}
        />
      </div>
      <div className="relative mb-[45px] flex flex-col border-b-[1px] border-main-gray2 pb-[58px]">
        <label
          className={`mb-2 text-lb ${
            touched.aboutSchool && errors.aboutSchool
              ? "text-main-invalid"
              : "text-black"
          }`}
          htmlFor="aboutSchool"
        >
          აღწერა
        </label>
        <textarea
          className={`h-[103px] w-full rounded-[4px] border-[1px] border-main-gray3 py-[13px] px-4 text-lbp ${
            touched.aboutSchool && errors.aboutSchool && "border-main-invalid"
          } ${
            touched.aboutSchool && !errors.aboutSchool && "border-main-valid"
          }`}
          name="aboutSchool"
          id="aboutSchool"
          placeholder="განათლების აღწერა"
          value={values.aboutSchool}
          onChange={handleChange}
          onBlur={handleBlur("aboutSchool")}
        ></textarea>
        <img
          src={invalid}
          alt="nwnw"
          className={`absolute right-[-30px] top-[37px] z-50 ${
            touched.aboutSchool && !!errors.aboutSchool ? "" : "hidden"
          }`}
        />
        <img
          src={valid}
          alt="nwnw"
          className={`absolute right-[5px] top-[40px] z-50
           ${touched.aboutSchool && !errors.aboutSchool ? "" : "hidden"}`}
        />
      </div>
    </div>
  );
}

export default EducationForm;
