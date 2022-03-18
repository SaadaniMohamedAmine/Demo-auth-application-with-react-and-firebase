import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import schema from "../schemas/registerSchema";
import clsx from "clsx";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerNewUser } from "../utils/functions";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase-config";

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const submit = (data) => {
    const { email, password } = data;
    registerNewUser(email, password);
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/feed");
      }
    });
  });
  return (
    <React.Fragment>
      <div className="container-md py-5 mx-auto">
        <h1 className="text-center my-3 pb-5">Register form</h1>
        <form
          className="border p-3 w-50 mx-auto register-form"
          onSubmit={handleSubmit(submit)}
        >
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="text"
              id="email"
              className={clsx(errors.email ? "is-invalid" : "", "form-control")}
              {...register("email")}
            />
            <div className="invalid-feedback">{errors.email?.message}</div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className={clsx(
                errors.password ? "is-invalid" : "",
                "form-control"
              )}
              {...register("password")}
            />
            <div className="invalid-feedback">{errors.password?.message}</div>
          </div>
          <div className="mb-3 text-end">
            <button className="btn  btn-danger">Register</button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Register;
