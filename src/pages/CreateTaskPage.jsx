import React from "react";
import { useForm } from "react-hook-form";

const CreateTaskPage = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit(() => {});

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center bg-zinc-800 p-10 rounded-md">
        <form onSubmit={onSubmit}>
          <input
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md mt-4"
            type="title"
            placeholder="Title"
            {...register("title")}
            autoFocus
          />
          <textarea
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md mt-4"
            rows={3}
            placeholder="Description"
            {...register("description")}
          />
          <label className="flex mt-4 p-0" htmlFor="status">
            Status
          </label>
          <select
            name="status"
            id="status"
            {...register("status")}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md mt-4"
          >
            <option value="BACKLOG">Backlog</option>
            <option value="PENDIENTE">Pendiente</option>
            <option value="COMPLETADO">Completado</option>
          </select>
          <button
            className="w-full bg-zinc-700 text-white hover:bg-zinc-600 px-4 py-2 rounded-md mt-4"
            type="submit"
          >
            Save
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateTaskPage;
