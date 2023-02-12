import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import * as yup from "yup";

const childSchema = yup.object().shape({
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  age: yup.number().moreThan(17, "Age must be 18 or older"),
});

const ParentForm = () => {
  const [children, setChildren] = useState();
  return (
    <Formik
      initialValues={{
        children: [
          { firstName: "", lastName: "", age: "" },
          { firstName: "", lastName: "", age: "" },
        ],
      }}
      validationSchema={yup.object().shape({
        children: yup.array().of(childSchema),
      })}
      onSubmit={(values, actions) => {
        console.log(values);
        actions.setSubmitting(false);
      }}
    >
      {({ isSubmitting, values, handleSubmit, errors }) => (
        <Form onSubmit={handleSubmit}>
          <h1>Parent Form</h1>
          {values.children.map((_, index) => (
            <ChildForm key={index} index={index} />
          ))}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
          <button onClick={() => console.log(errors)} className="m-6">
            dasdasd
          </button>
        </Form>
      )}
    </Formik>
  );
};

const ChildForm = ({ index }) => (
  <div>
    <h3>Child Form {index + 1}</h3>
    <Field name={`children.${index}.firstName`} className="m-2 bg-gray-400" />
    <Field name={`children.${index}.lastName`} className="m-2 bg-gray-400" />
    <Field
      name={`children.${index}.age`}
      type="number"
      className="m-2 bg-gray-400"
    />
  </div>
);

export default ParentForm;
