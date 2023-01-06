import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MyCheckboxInput, MySelectInput, MyTextInput } from "../components";
import "../styles/styles.css";

export const FormikAbstractationPage = () => {
  return (
    <div>
      <h1>Formik Abstractation</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .required("Requerido")
            .max(15, "Debe de tener 15 caracteres o menos"),
          lastName: Yup.string()
            .required("Requerido")
            .max(10, "Debe de tener 10 caracteres o menos"),
          email: Yup.string().required("Requerido").email("Email invalido"),
          terms: Yup.boolean().oneOf([true], "Debe de aceptar las condiciones"),
          jobType: Yup.string()
            .notOneOf(["it-jr"], "No es permitida")
            .required("Requerido"),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput
              label="First Name"
              name="firstName"
              placeholder="Peter"
            />
            <MyTextInput
              label="Last Name"
              name="lastName"
              placeholder="Parker"
            />
            <MyTextInput
              label="Email"
              name="email"
              type="email"
              placeholder="some@thing.com"
            />

            <MySelectInput label={"Job Type"} name={"jobType"}>
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Disigner</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-jr">IT JR</option>
            </MySelectInput>

            <MyCheckboxInput label={"Terms and conditions"} name={"terms"} />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
