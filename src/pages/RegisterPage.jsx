import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signUp, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async data => {
    signUp(data);
  });

  return (
    <div className="w-full h-screen flex justify-center items-center bg-zinc-800 p-10 rounded-md">
      {registerErrors.map((error, i) => {
        <div className="bg-red-500 text-white my-2" key={i}>
          {error}
        </div>;
      })}
      <div>
        <form onSubmit={onSubmit}>
          <input
            type="username"
            placeholder="Username"
            {...register("username", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md mt-4"
          />
          {errors.username && (
            <p className="text-red-500"> El usuario es requerido </p>
          )}
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md mt-4"
          />
          {errors.email && (
            <p className="text-red-500"> El email es requerido </p>
          )}
          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md mt-4"
          />
          {errors.password && (
            <p className="text-red-500"> La contraseña es requerida </p>
          )}
          <button
            type="submit"
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md mt-4 hover:bg-zinc-600"
          >
            Register
          </button>
        </form>
        <p className="flex gap-x-2 justify-between my-1">
          Ya tienes una cuenta?
          {
            <Link className="underline text-sky-500" to="/login">
              Loguearse
            </Link>
          }
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
