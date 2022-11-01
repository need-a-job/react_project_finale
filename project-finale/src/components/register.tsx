import { useFormik } from "formik";
import { FunctionComponent } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { register } from "../services/userServices";
import { User } from "../interfaces/User";
import React from "react";
import Navigation from "./navigation";

interface RegisterProps {}

const Register: FunctionComponent<RegisterProps> = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { name: "", email: "", password: "", bizz: false },

    validationSchema: yup.object({
      name: yup
        .string()
        .min(2)
        .required("required name"),
      email: yup
        .string()
        .email()
        .required("required email"),
      password: yup
        .string()
        .min(8)
        .required("required password"),
      bizz: yup.bool(),
    }),

    onSubmit: (values: User) => {
      register(values)
        .then((result) => {
          navigate("/homeAfter");
        })
        .catch((err) => console.log(err));
    },
  });

  return (
    <>
      <Navigation />
      {/* // form     */}
      <form className="container my-5 w-25" onSubmit={formik.handleSubmit}>
        <h1 className="display-1">Register</h1>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingNameInput"
            placeholder="."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            name="name"
          />
          <label htmlFor="floatingNameInput">Name</label>
          {formik.errors.name && formik.touched.name ? (
            <p className="text-danger">{formik.errors.name}</p>
          ) : null}
        </div>

        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            name="email"
          />
          <label htmlFor="floatingInput">Email address</label>
          {formik.errors.email && formik.touched.email ? (
            <p className="text-danger">{formik.errors.email}</p>
          ) : null}
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control
        "
            id="floatingPassword"
            placeholder="."
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
            name="password"
          />
          <label htmlFor="floatingPassword">Password</label>
          {formik.errors.password && formik.touched.password ? (
            <p className="text-danger">{formik.errors.password}</p>
          ) : null}
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            onChange={formik.handleChange}
            id="flexCheckDefault"
            name="bizz"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Bizz
          </label>
        </div>

        <button type="submit" className="btn btn-primary w-100 mt-3 py-3">
          Submit Register
        </button>
        <Link to={"/"} className="btn btn-secondary w-100 my-1 py-3">
          Already have user? Login
        </Link>
      </form>
    </>
  );
};

export default Register;
