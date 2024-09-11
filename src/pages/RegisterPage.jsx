import React from "react";
import { useForm } from "react-hook-form";
import { registerRequest } from "../api/auth";

const RegisterPage = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit(async data => {
    console.log(data);
    const res = await registerRequest(data);
    console.log(res);
  });

  return (
    <div className="w-full h-screen flex justify-center items-center bg-zinc-800 p-10 rounded-md">
      <form onSubmit={onSubmit}>
        <input
          type="username"
          placeholder="Username"
          {...register("username", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md mt-4"
        />
        <input
          type="email"
          placeholder="Email"
          {...register("email", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md mt-4"
        />
        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md mt-4"
        />
        <button
          type="submit"
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md mt-4 hover:bg-zinc-600"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
