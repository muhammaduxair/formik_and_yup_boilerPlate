import { useFormik } from "formik";
import * as yup from "yup";

const Formik_and_Yup = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (val) => {
      console.log(val);
    },
    validationSchema: yup.object({
      email: yup.string().email().required("This Field is Required"),
      password: yup
        .string()
        .min(6, "Password is too short.")
        .max(12, "Password is too long")
        .required("Password is Must Required"),
    }),
  });

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Login</h1>
      <form action="" onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="">Enter Email:</label>
          <input
            id="email"
            type="text"
            value={formik.values.email}
            onChange={formik.handleChange}
            autoComplete="none"
          />
          <p>{formik.errors.email && formik.errors.email}</p>
        </div>
        <div>
          <label htmlFor="">Enter Password:</label>
          <input
            id="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          <p>{formik.errors.password && formik.errors.password}</p>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Formik_and_Yup;
