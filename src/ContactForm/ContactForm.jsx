import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { v4 as uuidv4 } from "uuid";
import * as Yup from "yup";
import PropTypes from "prop-types";
import css from "./ContactForm.module.css";

const ContactForm = ({ onAddContact }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const validationSchema = Yup.object().shape({
    contactname: Yup.string()
      .required("Name is required")
      .min(3, "Minimum 3 characters")
      .max(50, "Maximum 50 characters"),
    contactnumber: Yup.string()
      .required("Number is required")
      .min(3, "Minimum 3 characters")
      .max(50, "Maximum 50 characters"),
  });

  const handleSubmit = (values, actions) => {
    const newContact = {
      id: uuidv4(),
      name: values.contactname,
      number: values.contactnumber,
    };
    onAddContact(newContact);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ contactname: "", contactnumber: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label htmlFor={nameFieldId} className={css.label}>
          Name
        </label>
        <Field
          type="text"
          name="contactname"
          id={nameFieldId}
          className={css.field}
        />
        <ErrorMessage
          name="contactname"
          component="div"
          className={css.error}
        />
        <label htmlFor={numberFieldId} className={css.label}>
          Number
        </label>
        <Field
          type="number"
          name="contactnumber"
          id={numberFieldId}
          className={css.field}
        />
        <ErrorMessage
          name="contactnumber"
          component="div"
          className={css.error}
        />
        <button type="submit" className={css.button}>
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
