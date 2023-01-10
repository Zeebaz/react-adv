import { useFormik } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";

export const RegisterFormikPage = () => {
  const { handleSubmit, errors, touched, getFieldProps, handleReset } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password1: "",
        password2: "",
      },
      validationSchema: Yup.object({
        name: Yup.string()
          .required("Requerido")
          .min(2, "Debe tener mas de 2 caracteres")
          .max(15, "Debe tener como maximo 15 caracteres"),
        email: Yup.string().required("Requerido").email("Email invalido"),
        password1: Yup.string()
          .required("Requerido")
          .min(6, "Debe de tener 6 caracteres o mas"),
        password2: Yup.string()
          .oneOf([Yup.ref("password1")], "Is different")
          .required("Requerido"),
      }),
      onSubmit: (values) => console.log(values),
    });

  return (
    <div>
      <h1>Formik Register</h1>

      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firsName">Name</label>
        <input type="text" {...getFieldProps("name")} />
        {touched.name && errors.name && <span>{errors.name}</span>}

        <label htmlFor="email">Email</label>
        <input type="email" {...getFieldProps("email")} />
        {touched.email && errors.email && <span>{errors.email}</span>}

        <label htmlFor="password1">Password</label>
        <input type="password" {...getFieldProps("password1")} />
        {touched.password1 && errors.password1 && (
          <span>{errors.password1}</span>
        )}

        <label htmlFor="password2">Repete</label>
        <input type="password" {...getFieldProps("password2")} />
        {touched.password2 && errors.password2 && (
          <span>{errors.password2}</span>
        )}

        <button type="submit">Submit</button>
        <button onClick={handleReset}>Reset</button>
      </form>
    </div>
  );
};
