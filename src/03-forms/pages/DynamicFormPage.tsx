import formJSON from "../data/custom-form.json";
import { Formik, Form } from "formik";
import { MySelectInput, MyTextInput } from "../components";
import * as Yup from "yup";

const requiredFields: { [x: string]: any } = {};
const initialValues: { [x: string]: any } = {};
for (const input of formJSON) {
  initialValues[input.name] = input.value;

  if (!input.validations) continue;

  let schema = Yup.string();
  for (const rule of input.validations) {
    if (rule.type === "required") {
      schema = schema.required("Requerido");
    }

    if (rule.type === "minLength") {
      schema = schema.min(
        (rule as any).value || 2,
        `Minimo de ${(rule as any).value || 2}`
      );
    }

    if (rule.type === "email") {
      schema = schema.email("Mal formato de email");
    }
  }
  requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

export const DynamicFormPage = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <Form noValidate>
            {formJSON.map(
              ({ type, name, label, placeholder, value, options }) => {
                if (["input", "password", "email"].includes(type)) {
                  return (
                    <MyTextInput
                      key={name}
                      label={label}
                      name={name}
                      type={type as any}
                      placeholder={placeholder}
                    />
                  );
                } else if (type === "select") {
                  return (
                    <MySelectInput key={name} label={label} name={name}>
                      <option value="">Select an option</option>
                      {options?.map((opt) => (
                        <option key={opt.id} value={opt.id}>
                          {opt.label}
                        </option>
                      ))}
                    </MySelectInput>
                  );
                }

                throw new Error(`El type: ${type}, no es soportado`);
              }
            )}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
