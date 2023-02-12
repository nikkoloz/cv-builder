import { useEffect } from "react";
import InputC from "./InputC";
import { useFormik } from "formik";
import { experienceV } from "../validations/experienceV";
import {
  getValuesFromLocalStorage,
  saveValuesToLocalStorage,
} from "../functions/valuesUpdatingF";
import { experienceKey } from "../config/localstorageKeys";
import valid from "../assets/valid.svg";
import invalid from "../assets/invalid.svg";

import { Form } from "formik";

function TestExF({
  handleSubmit,
  values,
  id,
  handleChange,
  handleBlur,
  touched,
  errors,
}) {
  return (
    <Form onSubmit={handleSubmit}>
     {console.log(values)}
      <InputC
        divClass="mb-[30px]"
        labelText="თანამდებობა"
        placeholder="დეველოპერი, დიზაინერი, ა.შ."
        id={"position." + id}
        pText="მინიმუმ 2 სიმბოლო"
        values={values["position." + id]}
        onChange={handleChange}
        onBlur={handleBlur("position." + id)}
        touched={touched["position." + id]}
        errors={errors["position." + id]}
      />
      <InputC
        divClass="mb-[30px]"
        labelText="დამსაქმებელი"
        placeholder="დამსაქმებელი"
        id={"employer." + id}
        pText="მინიმუმ 2 სიმბოლო"
        value={values["employer." + id]}
        onChange={handleChange}
        onBlur={handleBlur("employer." + id)}
        touched={touched["employer." + id]}
        errors={errors["employer." + id]}
      />
      <div className="mb-8 flex w-full justify-between">
        <InputC
          divClass="mb-8 mr-[56px]"
          labelText="დაწყების რიცხვი"
          placeholder="anzorr666@redberry.ge"
          id={"startDate." + id}
          inputType="date"
          value={values["startDate." + id]}
          onChange={handleChange}
          onBlur={handleBlur("startDate." + id)}
          touched={touched["startDate." + id]}
          errors={errors["startDate." + id]}
          isDateInput={true}
        />
        <InputC
          divClass="mb-8"
          labelText="დამთავრების რიცხვი"
          placeholder="+995 551 12 34 56"
          id={"endDate." + id}
          inputType="date"
          value={values["endDate." + id]}
          onChange={handleChange}
          onBlur={handleBlur("endDate." + id)}
          touched={touched["endDate." + id]}
          errors={errors["endDate." + id]}
          isDateInput={true}
        />
      </div>

      <div className="relative mb-[45px] flex flex-col border-b-[1px] border-main-gray2 pb-[58px]">
        <label
          className={`mb-2 text-lb ${
            touched["aboutJob." + id] && errors["aboutJob." + id]
              ? " text-main-invalid"
              : "text-black"
          }`}
          htmlFor={"aboutJob." + id}
        >
          აღწერა
        </label>
        <textarea
          className="h-[103px] w-full rounded-[4px] py-[13px] px-4 text-lbp"
          name={"aboutJob." + id}
          id={"aboutJob." + id}
          placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
          value={values["aboutJob." + id]}
          onChange={handleChange}
          onBlur={handleBlur("aboutJob." + id)}
        ></textarea>
        <img
          src={invalid}
          alt="nwnw"
          className={`absolute right-[-30px] top-[47px] ${
            touched["aboutJob." + id] && !!errors["aboutJob." + id]
              ? ""
              : "hidden"
          }`}
        />
        <img
          src={valid}
          alt="nwnw"
          className={`absolute top-[40px] right-[5px]
           ${
             touched["aboutJob." + id] && !errors["aboutJob." + id]
               ? ""
               : "hidden"
           }`}
        />
      </div>
    </Form>
  );
}

export default TestExF;
