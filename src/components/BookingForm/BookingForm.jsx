import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import * as Yup from "yup";
import s from "./BookingForm.module.css";
import toast from "react-hot-toast";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// 🔹 Кастомне поле для дати
const DateInput = ({ ...props }) => {
  const [field, meta, helpers] = useField(props);
  const { setValue } = helpers;

  return (
    <>
      <DatePicker
        {...props}
        selected={field.value}
        onChange={(val) => setValue(val)}
        className={s.input}
        placeholderText="Booking date"
        dateFormat="yyyy-MM-dd"
      />
      {meta.touched && meta.error ? (
        <div className={s.error}>{meta.error}</div>
      ) : null}
    </>
  );
};

// 🔹 Схема валідації
const BookingSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  date: Yup.date().required("Required"),
  comment: Yup.string(),
});

const BookingForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log("Form submitted:", values);
    toast.success("Form sent successfully!");
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", date: null, comment: "" }}
      validationSchema={BookingSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className={s.form}>
          <Field
            type="text"
            name="name"
            placeholder="Name*"
            className={s.input}
          />
          <ErrorMessage name="name" component="div" className={s.error} />

          <Field
            type="email"
            name="email"
            placeholder="Email*"
            className={s.input}
          />
          <ErrorMessage name="email" component="div" className={s.error} />

          {/* Кастомне поле для дати */}
          <DateInput name="date" />

          <Field
            as="textarea"
            name="comment"
            placeholder="Comment"
            className={s.textarea}
          />
          <ErrorMessage name="comment" component="div" className={s.error} />

          <button type="submit" className={s.button}>
            Send
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default BookingForm;
