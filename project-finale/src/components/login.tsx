import { useFormik } from "formik";
import { FunctionComponent } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { findUser } from "../services/userServices";
import { findBizz } from "../services/businessService";
import { User } from "../interfaces/User";
import React from "react";
import axios from "axios";
import UserContext from "../MyContext";
import Navigation from "./navigation";

interface LoginProps {}

const Login: FunctionComponent<LoginProps> = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { email: "", password: "", bizz: false },

    validationSchema: yup.object({
      email: yup
        .string()
        .email()
        .required("required email"),
      password: yup
        .string()
        .min(8)
        .required("required password"),
    }),

    onSubmit: (values: User) => {
      findUser(values)
        .then((user_result) => {
          if (user_result.data.token.length > 0) {
            sessionStorage.setItem("token", user_result.data.token);
            sessionStorage.setItem(
              "user",
              JSON.stringify(user_result.data.user)
            );
            sessionStorage.setItem("isBizz", user_result.data.user.bizz);

            if (values.bizz) {
              navigate("/Bizzhome");
            } else {
              navigate("/homeAfter");
            }
          } else {
            alert("wrong login info");
          }
        })
        .catch((err) => console.log(err));
    },
  });

  return (
    <>
      <Navigation />
      {/* form */}
      <form className="container my-5 w-25" onSubmit={formik.handleSubmit}>
        <h1 className="display-1">Login</h1>
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
        <button type="submit" className="btn btn-primary w-100 mt-3 py-3">
          Submit Login
        </button>
        <Link to={"/register"} className="btn btn-secondary w-100 my-1 py-3">
          dont have a user? Register
        </Link>
      </form>
    </>
  );
};

export default Login;
