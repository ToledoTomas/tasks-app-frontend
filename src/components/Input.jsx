import React, { useEffect, useState } from "react";
import { getUserRequest } from "../api/users";
import x from "../icons/x.png";
import add from "../icons/add.png";
import { deleteTaskRequest } from "../api/tasks";

const Input = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await getUserRequest();
      setUsers(res.data);
    } catch (err) {
      console.error("Error al obtener los users", err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async id => {
    const res = users.find(user => user.id === id);
    try {
      await deleteTaskRequest(id);
      setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
    } catch (error) {
      console.error("Error al eliminar el usuario con id:", id);
      console.log(users);
      console.log(users.id);
      console.log(res)
    }
  };

  return (
    <div className="flex flex-col gap-2 w-48 m-10">
      <select
        name="username"
        id="username"
        className="p-1 border-2 rounded-md border-black"
      >
        <option value="" disabled>
          Selecciona un usuario
        </option>
        {users.map(user => {
          return (
            <option key={user.id} value={user.id}>
              {user.username}
            </option>
          );
        })}
      </select>

      <button className="p-1 border-2 rounded-md bg-green-400 flex flex-row justify-center items-center gap-2">
        <img className="size-6" src={add} alt="Agregar usuario" />
        Agregar Usuario
      </button>

      <button
        onClick={() => handleDelete(users.id)}
        className="p-1 border-2 rounded-md bg-red-400 flex flex-row justify-center items-center gap-2"
      >
        <img className="size-6" src={x} alt="Eliminar usuario" />
        Eliminar Usuario
      </button>
    </div>
  );
};

export default Input;
