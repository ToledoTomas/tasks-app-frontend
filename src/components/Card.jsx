import React, { useEffect, useState } from "react";
import { getTasksRequest, deleteTaskRequest } from "../api/tasks";
import edit from "../icons/edit.png";
import remove from "../icons/remove.png";

const Card = ({ filterStatus }) => {
  const [data, setData] = useState([]);

  const fetchTasks = async () => {
    try {
      const res = await getTasksRequest();
      setData(res.data);
    } catch (err) {
      console.error("Error al obtener las tareas:", err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleDelete = async id => {
    try {
      await deleteTaskRequest(id);
      setData(prevData => prevData.filter(task => task.id !== id));
    } catch (err) {
      console.error("Error al eliminar la tarea:", err);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 justify-items-center">
        {data
          .filter(task => task.status === filterStatus)
          .map(task => (
            <div key={task.id} className="border p-4 rounded shadow">
              <div className="flex relative justify-end gap-3">
                <button>
                  <img className="size-5" src={edit} alt="Edit" />
                </button>
                <button onClick={() => handleDelete(task.id)}>
                  <img className="size-5" src={remove} alt="Remove" />
                </button>
              </div>
              <h1 className="text-xl font-semibold">{task.user.username}</h1>
              <h3 className="text-lg font-semibold">
                Título: <span className="font-normal">{task.title}</span>
              </h3>
              <p className="text-sm font-semibold">
                Descripción:{" "}
                <span className="font-normal">{task.description}</span>
              </p>
              <p className="text-sm font-semibold">
                Estado: <span className="font-normal">{task.status}</span>
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Card;
