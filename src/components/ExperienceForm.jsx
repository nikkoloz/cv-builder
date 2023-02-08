import InputC from "./InputC";
import { useFormik } from "formik";
import { experienceV } from "../validations/experienceV";
import valid from "../assets/valid.svg";
import invalid from "../assets/invalid.svg";

const onSubmit = () => {
  console.log("submitted");
};

function ExperienceForm({ id }) {
  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        position: "",
        employer: "",
        startDate: "",
        endDate: "",
        aboutJob: "",
      },
      validationSchema: experienceV,
      onSubmit,
    });
  return (
    <form onSubmit={handleSubmit}>
      <InputC
        divClass="mb-[30px]"
        labelText="თანამდებობა"
        placeholder="დეველოპერი, დიზაინერი, ა.შ."
        id="position"
        pText="მინიმუმ 2 სიმბოლო"
        value={values.position}
        onChange={handleChange}
        onBlur={handleBlur("position")}
        touched={touched.position}
        error={errors.position}
      />
      <InputC
        divClass="mb-[30px]"
        labelText="დამსაქმებელი"
        placeholder="დამსაქმებელი"
        id="employer"
        pText="მინიმუმ 2 სიმბოლო"
        value={values.employer}
        onChange={handleChange}
        onBlur={handleBlur("employer")}
        touched={touched.employer}
        error={errors.employer}
      />
      <div className="mb-8 flex w-full justify-between">
        <InputC
          divClass="mb-8 mr-[56px]"
          labelText="დაწყების რიცხვი"
          placeholder="anzorr666@redberry.ge"
          id="startDate"
          inputType="date"
          value={values.startDate}
          onChange={handleChange}
          onBlur={handleBlur("startDate")}
          touched={touched.startDate}
          error={errors.startDate}
          isDateInput={true}
        />
        <InputC
          divClass="mb-8"
          labelText="დამთავრების რიცხვი"
          placeholder="+995 551 12 34 56"
          id="endDate"
          inputType="date"
          value={values.endDate}
          onChange={handleChange}
          onBlur={handleBlur("endDate")}
          touched={touched.endDate}
          error={errors.endDate}
          isDateInput={true}
        />
      </div>

      <div className="relative mb-[45px] flex flex-col border-b-[1px] border-main-gray2 pb-[58px]">
        <label
          className={`mb-2 text-lb ${
            touched.aboutJob && errors.aboutJob
              ? " text-main-invalid"
              : "text-black"
          }`}
          htmlFor="aboutJob"
        >
          აღწერა
        </label>
        <textarea
          className="h-[103px] w-full rounded-[4px] py-[13px] px-4 text-lbp"
          name="aboutJob"
          id="aboutJob"
          placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
          value={values.aboutJob}
          onChange={handleChange}
          onBlur={handleBlur("aboutJob")}
        ></textarea>
        <img
          src={invalid}
          alt="nwnw"
          className={`absolute right-[-30px] top-[47px] ${
            touched.aboutJob && !!errors.aboutJob ? "" : "hidden"
          }`}
        />
        <img
          src={valid}
          alt="nwnw"
          className={`absolute top-[47px]
           ${touched.aboutJob && !errors.aboutJob ? "" : "hidden"}`}
        />
      </div>
    </form>
  );
}

export default ExperienceForm;
