import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { loginRequest } from "../api/auth";
import { useAuthStore } from "../store/auth";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const setToken = useAuthStore(state => state.setToken);

  const onSubmit = handleSubmit(async data => {
    const resLogin = await loginRequest(data);
    setToken(resLogin.data.token);
  });

  return (
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
          Login
        </button>
      </form>
      <p className="flex gap-x-2 justify-between my-1">
        No tienes cuenta aún?
        {
          <Link className="underline text-sky-500" to="/register">
            Registrarse
          </Link>
        }
      </p>
    </div>
  );
};

export default LoginPage;
