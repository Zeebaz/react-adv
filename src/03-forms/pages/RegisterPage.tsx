import "../styles/styles.css";
import { FormEvent } from "react";
import { useForm } from "../hooks/useForm";

export const RegisterPage = () => {
  const {
    handleChange,
    formData,
    email,
    name,
    password1,
    password2,
    resetForm,
    isValidEmail,
  } = useForm({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>Register Page</h1>
      <form noValidate onSubmit={handleSubmit}>
        <input
          name="name"
          onChange={handleChange}
          value={name}
          type="text"
          placeholder="Name"
          className={`${name.trim().length <= 0 && "has-error"}`}
        />
        {name.trim().length <= 0 && <span>Este campo es necesario</span>}
        <input
          name="email"
          onChange={handleChange}
          value={email}
          type="email"
          placeholder="Email"
          className={`${!isValidEmail(email) && "has-error"}`}
        />
        {!isValidEmail(email) && <span>Email invalido</span>}
        <input
          name="password1"
          onChange={handleChange}
          value={password1}
          type="password"
          placeholder="Password"
          className={`${
            password1.trim().length < 6 &&
            password1.trim().length > 0 &&
            "has-error"
          }`}
        />
        {password1.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password1.trim().length < 6 && password1.trim().length > 0 && (
          <span>La contrasenia debe tener 6 caracteres</span>
        )}
        <input
          name="password2"
          onChange={handleChange}
          value={password2}
          type="password"
          placeholder="Repeat Password"
          className={`${password2.trim().length <= 0 && "has-error"}`}
        />
        {password2.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password2.trim().length > 0 && password1 !== password2 && (
          <span>Las contrasenias deben ser iguales</span>
        )}
        <button type="submit">Create</button>
        <button onClick={resetForm}>Reset form</button>
      </form>
    </div>
  );
};
