import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import clsx from "clsx";
import schema from "../schemas/loginSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginUser } from "../utils/functions";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase-config";
import { onAuthStateChanged } from "firebase/auth";

const Login = () => {
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
    loginUser(email, password);
    navigate("/feed");
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/feed");
      }
    });
  });
  return (
    <div className="container py-5">
      <h1 className="text-center my-3 pb-5">Login form</h1>
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
            className={clsx(errors.email ? " is-invalid" : "", "form-control")}
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
            className={clsx(errors.email ? " is-invalid" : "", "form-control")}
            {...register("password")}
          />
          <div className="invalid-feedback">{errors.password?.message}</div>
        </div>
        <div className="mb-3 text-end">
          <button className="btn  btn-danger">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
