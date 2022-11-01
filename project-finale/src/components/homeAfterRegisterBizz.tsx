import { useFormik } from "formik";
import { FunctionComponent, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import * as yup from "yup";
import React from "react";
import { Business } from "../interfaces/BusinessCard";
import { addBizzCard } from "../services/bizzCardService";
import Navigation from "./navigation";

interface HomeAfterRegisterBizzProps {}

const HomeAfterRegisterBizz: FunctionComponent<HomeAfterRegisterBizzProps> = () => {
  const [file, setFile] = useState<File>();

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      bizzName: "",
      bizzDescription: "",
      bizzAdress: "",
      bizzPhone: "",
      bizzImage: "",
    },

    validationSchema: yup.object({
      bizzName: yup
        .string()
        .min(2)
        .required("bizz name is required"),
      bizzAdress: yup.string().required("bizz adress is required"),
      bizzDescription: yup
        .string()
        .min(8)
        .required("bizz description is required"),
      bizzPhone: yup
        .string()
        .min(10)
        .required("bizz phone is required"),
      bizzImage: yup.string().required("bizz image is required"),
    }),

    onSubmit: (values: Business, { resetForm }) => {
      console.log(file);

      let reader = new FileReader();
      reader.readAsDataURL(file!);
      reader.onload = () => {
        values.bizzImage = `${reader.result}`

        addBizzCard(values)
          .then((result) => {
            alert("bizzCard was added");
            resetForm();
          })
          .catch((err) => console.log(err));
      };
    },
  });
  return (
    <>
    <Navigation />

      {/* // form     */}
      <form className="container my-5 w-25" onSubmit={formik.handleSubmit}>
        <h1 className="display-1">Business registration form</h1>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingNameInput"
            placeholder="."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.bizzName}
            name="bizzName"
          />
          <label htmlFor="floatingNameInput">Business Name</label>
          {formik.errors.bizzName && formik.touched.bizzName ? (
            <p className="text-danger">{formik.errors.bizzName}</p>
          ) : null}
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.bizzDescription}
            name="bizzDescription"
          />
          <label htmlFor="floatingInput">Business Description</label>
          {formik.errors.bizzDescription && formik.touched.bizzDescription ? (
            <p className="text-danger">{formik.errors.bizzDescription}</p>
          ) : null}
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control
            "
            id="floatingPassword"
            placeholder="."
            onChange={formik.handleChange}
            value={formik.values.bizzAdress}
            onBlur={formik.handleBlur}
            name="bizzAdress"
          />
          <label htmlFor="floatingPassword">Business Adress</label>
          {formik.errors.bizzAdress && formik.touched.bizzAdress ? (
            <p className="text-danger">{formik.errors.bizzAdress}</p>
          ) : null}
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control
            "
            id="floatingPassword"
            placeholder="."
            onChange={formik.handleChange}
            value={formik.values.bizzPhone}
            onBlur={formik.handleBlur}
            name="bizzPhone"
          />
          <label htmlFor="floatingPassword">Business Phone</label>
          {formik.errors.bizzPhone && formik.touched.bizzPhone ? (
            <p className="text-danger">{formik.errors.bizzPhone}</p>
          ) : null}
        </div>

        <div className="form-floating">
          <input
            type="file"
            className="form-control"
            id="floatingPassword"
            placeholder="."
            onChange={(event) => {
              setFile(event.currentTarget.files![0]);
              formik.handleChange(event);
            }}
            value={formik.values.bizzImage}
            onBlur={formik.handleBlur}
            name="bizzImage"
          />
          <label htmlFor="floatingPassword">Business Image</label>
          {formik.errors.bizzImage && formik.touched.bizzImage ? (
            <p className="text-danger">{formik.errors.bizzImage}</p>
          ) : null}
        </div>
        <button type="submit" className="btn btn-primary w-100 mt-3 py-3">
          Create Card
        </button>
      </form>
    </>
  );
};

export default HomeAfterRegisterBizz;
